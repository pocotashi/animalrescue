import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { collection, getDocs, deleteDoc, doc, addDoc} from "firebase/firestore"
import NavBar from '../Navbar';
import Footer from '../Footer';

function Shop () {

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
        const getItems = async () => {
            const data = await getDocs(itemsCollectionRef);
            setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
          }
    
        const getCart = async () => {
            const data = await getDocs(cartCollectionRef);
            setCart(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getItems()
        getCart()

    })

    return (
        <div className='shop'>

            <NavBar/>
            <input placeholder='new item...' value={newItem} onChange={(event) => { setNewItem(event.target.value); }}/>
            <input type="number" placeholder='price..' value={newPrice} onChange={(event) => { setNewPrice(event.target.value); }}/>
            
            <button onClick={createItem}> Create New Item</button>

            <h1>Shop</h1>

            {items.map((item) => {
              return (
                <div key={item.id}>
                    {" "}
                    <h3>Name: {item.name}</h3>
                    <h3>Price: {item.price}</h3>
                    <button>-</button>
                    <button onClick={ () => {createCartItem(item)}}>Add to cart</button>
                    <button>+</button>
                
                    <div>
                        <button onClick={ () => {deleteItem(item.id)}}> Delete Item</button>
                    </div>
                </div>
              )
            })}

            <div>
                <h1> Your Cart</h1>

                {cart.map((cartItem) => {
                return (
                    <div key={cartItem.id}>
                        <h3>Name: {cartItem.name}</h3>
                        <h3>Price: {cartItem.price}</h3>

                        <div>
                            <button onClick={ () => {deleteCartItem(cartItem.id)}}> Delete Item</button>
                        </div>
                    </div>   
                )})}
            </div>
            <Footer/>    
        </div>
    )
}

export default Shop;