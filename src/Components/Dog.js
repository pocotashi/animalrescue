import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc} from "firebase/firestore"
import NavBar from '../Navbar';
import {Row, Col, Card, Container} from "react-bootstrap";
import SideComp from './Sidecomp';
import Footer from '../Footer';


function Dog() {

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState();
  const [newGender, setNewGender] = useState("");
  const [newBreed, setNewBreed] = useState("");
  const [newStatus, setNewStatus] = useState("available");

  const [dogs, setDogs] = useState([]);

  const dogsCollectionRef = collection(db, "dogs");

  const createDog = async () => {
    await addDoc(dogsCollectionRef, 
      {
        name: newName,
        age: Number(newAge) , 
        gender: newGender, 
        breed: newBreed, 
        status: newStatus
      });

      console.log(createDog);

      setNewName("")
      setNewAge("")
      setNewGender("")
      setNewBreed("")
      setNewStatus("")
  };
  
  const updateDog = async (id, age) => {
    
    const dogDoc = doc(db, "dogs", id)
    const newFields = {age: age + 1}
    await updateDoc(dogDoc, newFields)

  }

  const updateDogStatus = async (id, status) => {
    
    const dogDoc = doc(db, "dogs", id)
    const newStats = {status: status = "adopted"}
    await updateDoc(dogDoc, newStats)

  }

  const deleteDog = async (id) => {

    const dogDoc = doc(db, "dogs", id)
    await deleteDoc(dogDoc)

  }

  useEffect(() => {
    const getDogs = async () => {

      const data = await getDocs(dogsCollectionRef);
      setDogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getDogs()
  }, [dogsCollectionRef])



  return (
    <div className='dogsForAdoption'>
       <NavBar/>

        
      <div>
            <img className="firstImage" alt="dogs" src="https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>

        <SideComp/>

        
      
      <div >

        <input placeholder='Name...' value={newName} onChange={(event) => { setNewName(event.target.value); }}/>
        <input placeholder='breed...' value={newBreed} onChange={(event) => { setNewBreed(event.target.value); }}/>
        <input placeholder='gender...' value={newGender} onChange={(event) => { setNewGender(event.target.value); }}/>
        <input type="number" placeholder='Age..' value={newAge} onChange={(event) => { setNewAge(event.target.value); }}/>
        <input placeholder='status...'   onChange={(event) => { setNewStatus(event.target.value); }}/>

        <button onClick={createDog}> Create User</button>

          <h1>Dogs for Adoption</h1>

          <h6>We no longer accept walk-in visits.</h6>
          <h6>Potential adopters should submit an <bold>adoption survey</bold> if interested in meeting and adopting any of our dogs! <bold>Click here</bold> to learn more about our adoption process.</h6>

          <div className='specialCare'>
            <h6 className='specialCareText'>  ⭐️ = Requires special care</h6> 
          </div>
        
          <div className='profileCards'>
            <Container>
              <Row xs={1} md={3} className="g-4">
              {dogs.map((dog) => ( 
                <Col>
                    <Card>
                      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" />
                        <div key={dog.id}>
                            {" "}
                            <Card.Body className='cardBody'>
                              <Card.Title><h2>Name: {dog.name}</h2></Card.Title>
                              <Card.Text><h3>Age: {dog.age}</h3></Card.Text>
                              <Card.Text><h3>Gender: {dog.gender}</h3></Card.Text>
                              <Card.Text><h3>Breed: {dog.breed}</h3></Card.Text>
                              <Card.Text><h3>Status: {dog.status}</h3></Card.Text>

                              <div>
                              <button onClick={ () => {updateDog(dog.id, dog.age)}}> increase age</button>
                              <button onClick={ ()=> {deleteDog(dog.id)}}> delete user</button>
                              <button onClick={ ()=> {updateDogStatus(dog.id)}}> Adopt ME</button>
                              </div>
                            </Card.Body>
                            
                            

                        </div>
                  </Card>
                </Col>
              ))}
              </Row>
            </Container>
          </div>
      
        </div>
        <Footer/>
    </div>
  );
}

export default Dog;
