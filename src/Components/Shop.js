/** @format */

import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
	collection,
	deleteDoc,
	doc,
	addDoc,
	query,
	onSnapshot,
} from 'firebase/firestore';

import { Row, Col, Card, Container, Nav } from 'react-bootstrap';

function Shop() {
	const [newItem, setNewItem] = useState('');
	const [newPrice, setNewPrice] = useState('');

	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([]);

	const itemsCollectionRef = collection(db, 'items');
	const cartCollectionRef = collection(db, 'cart');

	const createItem = async () => {
		await addDoc(itemsCollectionRef, {
			name: newItem,
			price: Number(newPrice),
		});

		setNewItem('');
		setNewPrice('');
		console.log(createItem);
	};

	const createCartItem = async (item) => {
		await addDoc(cartCollectionRef, {
			name: item.name,
			price: item.price,
		});

		console.log('are you working or nah?');
	};

	const deleteItem = async (id) => {
		const itemDoc = doc(db, 'items', id);
		await deleteDoc(itemDoc);
	};

	const deleteCartItem = async (id) => {
		const cartDoc = doc(db, 'cart', id);
		await deleteDoc(cartDoc);
	};

	useEffect(() => {
		const data = query(cartCollectionRef);

		const unsub = onSnapshot(data, (querySnapshot) => {
			let cartArray = [];
			querySnapshot.forEach((doc) => {
				cartArray.push({ ...doc.data(), id: doc.id });
			});
			setCart(cartArray);
		});

		return () => unsub();
	}, []);

	useEffect(() => {
		const data = query(itemsCollectionRef);
		const unsub = onSnapshot(data, (querySnapshot) => {
			let itemsArray = [];
			querySnapshot.forEach((doc) => {
				itemsArray.push({ ...doc.data(), id: doc.id });
			});

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
	}, []);

	return (
		<div className='shop'>
			<input
				placeholder='new item...'
				value={newItem}
				onChange={(event) => {
					setNewItem(event.target.value);
				}}
			/>
			<input
				type='number'
				placeholder='price..'
				value={newPrice}
				onChange={(event) => {
					setNewPrice(event.target.value);
				}}
			/>

			<button onClick={createItem}> Create New Item</button>

			<div className='displayItems'>
				<h1>Shop</h1>
				<h3> {cart.length} items are in your 🛒</h3>
				<Nav.Link href='/cart'>
					<button className='homeBacklink'> Checkout </button>
				</Nav.Link>

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
					<Row xs={1} md={3} className='g-4'>
						{items.map((item) => (
							<Col key={item.id}>
								<Card className='cardShop'>
									<Card.Img
										variant='top'
										src='https://cdn.shopify.com/s/files/1/0605/9229/2054/products/unisex-heavy-blend-hoodie-white-front-616dafd802de8_220x.jpg?v=1634578394'
									/>
									<div>
										{' '}
										<Card.Body>
											<Card.Title>
												<h2>{item.name}</h2>
											</Card.Title>
											<Card.Text>
												<h3>${item.price}</h3>
											</Card.Text>

											<button
												className='homeBacklink'
												onClick={() => {
													createCartItem(item);
												}}>
												Add to cart
											</button>

											{/* <div>
                                    <button onClick={ () => {deleteItem(item.id)}}> Delete Item</button>
                                </div> */}
										</Card.Body>
									</div>
								</Card>
							</Col>
						))}
					</Row>
				</Container>

				<Nav.Link href='/cart'>
					<button className='homeBacklink'> Checkout </button>
				</Nav.Link>
			</div>
			<div className='displayItems'>
				<h1>Thank you for visiting our online shop!</h1>
				<p>
					Proceeds from all sales in this shop directly support the{' '}
					<a href='/adopt/dog'>
						<strong>
							<em> dogs</em>
						</strong>
					</a>{' '}
					and{' '}
					<a href='/adopt/cat'>
						<strong>
							<em> cats</em>
						</strong>
					</a>{' '}
					at our rescue, as well as our rescue efforts within the community.
				</p>
				<p>
					If you have any questions about ordering from this store, please{' '}
					<a href='/about/#contact'>
						<strong> contact us</strong>
					</a>{' '}
					directly
				</p>
			</div>
		</div>
	);
}

export default Shop;
