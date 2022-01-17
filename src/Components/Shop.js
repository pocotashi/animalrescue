import { useState , useEffect} from 'react';
import {db} from "../firebase-config";
import { collection, getDocs, deleteDoc, doc, addDoc} from "firebase/firestore"
import NavBar from '../Navbar';
import Footer from '../Footer';
import {Row, Col, Card, Container} from "react-bootstrap";


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

            <div className='displayItems'>
            <h1>Shop</h1>

            {/* {items.map((item) => {
              return (
                <div key={item.id}>
                    {" "}
                    <h3>Name: {item.name}</h3>
                    <h3>$: {item.price}</h3>
                    <button>-</button>
                    <button onClick={ () => {createCartItem(item)}}>Add to cart</button>
                    <button>+</button>
                
                    <div>
                        <button onClick={ () => {deleteItem(item.id)}}> Delete Item</button>
                    </div>
                </div>
              )
            })} */}
            
            <Container>
              <Row xs={1} md={3} className="g-4">
              {items.map((item) => ( 
                <Col>
                    <Card  className='cardShop'>
                      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0605/9229/2054/products/unisex-heavy-blend-hoodie-white-front-616dafd802de8_220x.jpg?v=1634578394" />
                      <div key={item.id}>
                            {" "}
                            <Card.Body >
                              <Card.Title><h2>{item.name}</h2></Card.Title>
                              <Card.Text><h3>${item.price}</h3></Card.Text>
                              
                                <button>-</button>
                                <button onClick={ () => {createCartItem(item)}}>Add to cart</button>
                                <button>+</button>
                            
                                <div>
                                    <button onClick={ () => {deleteItem(item.id)}}> Delete Item</button>
                                </div>
                            </Card.Body>
                        </div>
                  </Card>
                </Col>
              ))}
              </Row>
            </Container>
            </div>

            <div className='yourCart'>
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