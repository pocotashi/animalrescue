import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { addDoc, collection, getDocs, deleteDoc, doc} from "firebase/firestore"

function Adoption () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [interest, setInterest] = useState("");
    const isEnabled = name.length > 0 && email.length > 0 && phone.length > 0 && interest.length > 0;

    const [adoption, setNewAdopt] = useState([]);

    const adoptCollectionRef = collection(db, "adoption");

    const adoptPet = async () => {

        await addDoc(adoptCollectionRef, 
          {
            name: name,
            phone: Number(phone), 
            email: email, 
            animalOfInterest: interest, 
            
          });

          setName("");
          setEmail("");
          setPhone("");
          setInterest("");
        
      };

    const deletePet = async (id) => {

        const petDoc = doc(db, "adoption", id)
        await deleteDoc(petDoc)

    }

    useEffect(() => {
        const getAdopt = async () => {

            const data = await getDocs(adoptCollectionRef);
            setNewAdopt(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
    
        }
        getAdopt()
      }, [adoptCollectionRef])

    return (
        <div>
            <h1>Adopt me</h1>

            <form>
                <input placeholder='name...'  value={name} onChange={(event) => { setName(event.target.value); }} required/>
                <input placeholder='email...' type="email" value={email} onChange={(event) => { setEmail(event.target.value); }} required/>
                <input type="number" placeholder='phone...' value={phone} onChange={(event) => { setPhone(event.target.value); }} required/>
                <input placeholder='animal of interest...' value={interest} onChange={(event) => { setInterest(event.target.value); }} required/>
                <button onClick={adoptPet} disabled={!isEnabled}>Send Form</button>
            </form>

            {adoption.map((adoptPet) => {
                return (
                    <div key={adoptPet.id}>
                        <h1>Name: {adoptPet.animalOfInterest}</h1>
                        <button onClick={ ()=> {deletePet(adoptPet.id)}}> delete info</button>

                    </div>
                )
            })}
        </div>
    )
}

export default Adoption