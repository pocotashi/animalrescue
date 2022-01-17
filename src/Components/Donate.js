import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore"

function Donate () {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");


    const [donation, setDonate] = useState([]);

    const donationCollectionRef = collection(db, "donation");

    const donateNow = async () => {

        await addDoc(donationCollectionRef,
            {
                name: name,
                email: email,
                phone: Number(phone),
                amount: Number(amount)
            });
        
            
          setName("");
          setEmail("");
          setPhone("");
          setAmount("");
    };

    const deleteDonate = async (id) => {

        const donateDoc = doc(db, "donation", id)
        await deleteDoc(donateDoc)

    }

    useEffect(() => {

        const getDonate = async () =>  {

            const data = await getDocs(donationCollectionRef);
            setDonate(data.docs.map((doc) => ({...doc.data(), id: doc.id})));    
       
    
        }
        getDonate()
    }, [donationCollectionRef])

    return (
        <div>

                <input placeholder='name' value={name} onChange={(event) => { setName(event.target.value); }}/>
                <input placeholder='email' value={email} onChange={(event) => { setEmail(event.target.value); }}/>
                <input type="number" placeholder='phone' value={phone} onChange={(event) => { setPhone(event.target.value); }}/>
                <input type="number" placeholder='amount' value={amount} onChange={(event) => { setAmount(event.target.value); }}/>

                <button onClick={donateNow}>Donate</button>

           <h1>Thank You</h1>

            {donation.map((donate) => {
                return (
                    <div key={donate.id}>
                        <h1>name: {donate.name}</h1>
                        <h1>amount: {donate.amount}</h1>

                        <button onClick={ ()=> {deleteDonate(donate.id)}}> delete info</button>

                    </div>
                )
            })}




        </div>
    )
}


export default Donate;