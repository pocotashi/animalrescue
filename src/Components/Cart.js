import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { collection, deleteDoc, doc, addDoc, query, onSnapshot} from "firebase/firestore"
import NavBar from '../Navbar';
import Footer from '../Footer';
import {Row, Col, Card, Container} from "react-bootstrap";


function Cart () {

    const [newItem, setNewItem] = useState("");
    const [newPrice, setNewPrice] = useState("")

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    const itemsCollectionRef = collection(db, "items");
    const cartCollectionRef = collection(db, "cart")

    const createItem = async () => {
        await addDoc(itemsCollectionRef, 
            {
                name: newItem,
                price: Number(newPrice), 
            });
    
            setNewItem("");
            setNewPrice("")
            console.log(createItem);
    }

    const createCartItem = async (item) => {
        await addDoc(cartCollectionRef, 
            {
               name: item.name,
               price: item.price
            });

            console.log('are you working or nah?')

    }

    const deleteItem = async (id) => {
        const itemDoc = doc(db, "items", id)
        await deleteDoc(itemDoc)
    
      }
    
    const deleteCartItem = async (id) => {
        const cartDoc = doc(db, "cart", id)
        await deleteDoc(cartDoc)

    }
    
    useEffect(() => {

        const data = query(cartCollectionRef);
        
        const unsub = onSnapshot(data, (querySnapshot) => {
            let cartArray = [];
            querySnapshot.forEach((doc) => {
                cartArray.push({...doc.data(), id: doc.id})
            })
            setCart(cartArray);

    });

    return () => unsub();
    },[])


    useEffect(() => {

        const data = query(itemsCollectionRef);
        const unsub = onSnapshot(data, (querySnapshot) => {
        let itemsArray = [];
        querySnapshot.forEach((doc) => {
            itemsArray.push({...doc.data(), id: doc.id})
        })

        
      setItems(itemsArray);
  });

  return () => unsub();
        // const getItems = async () => {
        //     const data = await getDocs(itemsCollectionRef);
        //     setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        //   }
    
        // const getCart = async () => {
        //     const data = await getDocs(cartCollectionRef);
        //     setCart(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        // }
        // getItems()
        // getCart()

    }, [])

    return (
        <div className='shop'>

            <NavBar/>
            <input placeholder='new item...' value={newItem} onChange={(event) => { setNewItem(event.target.value); }}/>
            <input type="number" placeholder='price..' value={newPrice} onChange={(event) => { setNewPrice(event.target.value); }}/>
            
            <button onClick={createItem}> Create New Item</button>

            <div className='displayItems'>


           

            <h1>Cart</h1>
            <h2>  {cart.length} items are in the 🛒cart</h2>


                {
                     cart.map((cartItem) => {
                return (
                    <div key={cartItem.id}>
                        <h3>Name: {cartItem.name}</h3>
                        <h3>Price: {cartItem.price}</h3>

                        <div>
                            <button onClick={ () => {deleteCartItem(cartItem.id)}}> Delete Item</button>
                        </div>
                    </div>   
                )}) 
                }            
            </div>
    
        </div>
    )
}

export default Cart;