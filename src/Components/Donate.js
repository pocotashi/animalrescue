import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { addDoc, collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import Footer from '../Footer';
import NavBar from '../Navbar';
import {Button} from 'react-bootstrap';


function Donate () {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [creditCard, setCreditCard] = useState("");
    const [expire, setExpire] = useState("");
    const [cvv, setCvv] = useState("");
    const isEnabled = name.length > 0 && email.length > 0 && phone.length > 0 && amount.length > 0;



    const [donation, setDonate] = useState([]);

    const donationCollectionRef = collection(db, "donation");

    const donateNow = async () => {

        await addDoc(donationCollectionRef,
            {
                name: name,
                email: email,
                phone: Number(phone),
                amount: Number(amount),
                creditCardNumber: Number(creditCard),
                expirationDate: (expire),
                cvv: Number(cvv),
            });
        
            
          setName("");
          setEmail("");
          setPhone("");
          setAmount("");
          setCreditCard("");
          setExpire("");
          setCvv("");
    };

    const deleteDonate = async (id) => {

        const donateDoc = doc(db, "donation", id)
        await deleteDoc(donateDoc)

    }

    
    useEffect(() => {

        const data = query(donationCollectionRef);
        const unsub = onSnapshot(data, (querySnapshot) => {
          let donateArray = [];
          querySnapshot.forEach((doc) => {
            donateArray.push({...doc.data(), id: doc.id})
          })
        setDonate(donateArray);
    });
  
    return () => unsub();
  }, []);  

    return (
        <div>
            <div className='donationForm'>


            <NavBar/>

            <div className='form'>
            <h1>Your gift will change a pet’s life!</h1>

            <p>At Animal Haven, we work every day to find homes for dogs and cats in crisis. We're committed to providing the best possible care for their specific needs while they wait. You can create hope for them: your donation provides healthy food, comfortable bedding, vital enrichment, training and medical intervention. Donate today!</p>

                <div>
                    <label className='donationText'><input type="checkbox" /> One time Donation  </label>
                
                    <label className='donationText'><input type="checkbox" /> Monthly Donation </label>
                </div>

                <div className='formPad'>
                    <h3 className='formText'>1. Gift Amount</h3>
                    <label>
                    <input type="number" placeholder='amount' value={amount} onChange={(event) => { setAmount(event.target.value); }}/>
                    </label>
                </div>
                
                <div className='formPad'>
                    <h3>2. Billing Amount</h3>

                        <div className='formText'>
                            <label>Name
                                <input size="50" type="text" placeholder='name' value={name} onChange={(event) => { setName(event.target.value); }}/>
                            </label>
                        </div>

                        <div className='formText'>
                            <label>Email
                                <input size="50" type="email" placeholder='email' value={email} onChange={(event) => { setEmail(event.target.value); }}/>
                            </label> 
                        </div>    

                        <div className='formText'>
                            <label>Phone
                                <input size="1000" type="number" placeholder='phone' value={phone} onChange={(event) => { setPhone(event.target.value); }}/>
                            </label> 
                        </div>  

                </div>

                <div className='formPad'>
                    <h3>3. Payment</h3>

                    <div className='formText'>
                        <label>Credit card number
                            <input size="100" type="number" value={creditCard} onChange={(event) => { setCreditCard(event.target.value); }}/>
                        </label>
                    </div>

                    <div className='formText'>
                        <label>Expiration date
                            <input type="date" value={expire} onChange={(event) => { setExpire(event.target.value); }}/>
                        </label>
                    </div>


                    <div className='formText'>
                        <label>CVV
                            <input type="number" value={cvv} onChange={(event) => { setCvv(event.target.value); }}/>
                        </label>
                    </div>


                </div>

                <Button className="donateButton" onClick={donateNow} disabled={!isEnabled}><h2>Donate</h2></Button>
                
                <div className="thankyou"><h1 >Thank You for your donation!</h1></div>
                
            </div>
           

            {/* {donation.map((donate) => {
                return (
                    <div key={donate.id}>
                        <h1>name: {donate.name}</h1>
                        <h1>amount: {donate.amount}</h1>

                        <button onClick={ ()=> {deleteDonate(donate.id)}}> delete info</button>

                    </div>
                )
            })} */}


                </div>
            <Footer/>
        </div>
    )
}


export default Donate;