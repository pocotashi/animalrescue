/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
	addDoc,
	collection,
	updateDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
} from 'firebase/firestore';
import { Row, Col, Card, Container } from 'react-bootstrap';
import SideComp from './Sidecomp';

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

function UserGreeting(props) {
	return <h1>Welcome back! You can make edits</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up to be an Admin.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return (
			<div>
				<UserGreeting />
			</div>
		);
	}
	// return <GuestGreeting />;
	return null;
}

function LoginButton(props) {
	return (
		<button className='btn btn-sm' onClick={props.onClick}>
			.
		</button>
	);
}

function LogoutButton(props) {
	return <button onClick={props.onClick}>Admin</button>;
}
function Dog() {
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState();
	const [newGender, setNewGender] = useState('');
	const [newBreed, setNewBreed] = useState('');
	const [newStatus, setNewStatus] = useState('available');

	const [dogs, setDogs] = useState([]);

	const dogsCollectionRef = collection(db, 'dogs');

	const createDog = async () => {
		await addDoc(dogsCollectionRef, {
			name: newName,
			age: Number(newAge),
			gender: newGender,
			breed: newBreed,
			status: newStatus,
		});

		console.log(createDog);
		console.log('are you working');

		setNewName('');
		setNewAge('');
		setNewGender('');
		setNewBreed('');
		setNewStatus('');
	};

	const updateDog = async (id, age) => {
		const dogDoc = doc(db, 'dogs', id);
		const newFields = { age: age + 1 };
		await updateDoc(dogDoc, newFields);
	};

	const updateDogStatus = async (id, status) => {
		const dogDoc = doc(db, 'dogs', id);
		const newStats = { status: (status = 'adopted') };
		await updateDoc(dogDoc, newStats);
	};

	const deleteDog = async (id) => {
		const dogDoc = doc(db, 'dogs', id);
		await deleteDoc(dogDoc);
	};

	useEffect(() => {
		const data = query(dogsCollectionRef);
		const unsub = onSnapshot(data, (querySnapshot) => {
			let dogsArray = [];
			querySnapshot.forEach((doc) => {
				dogsArray.push({ ...doc.data(), id: doc.id });
			});
			setDogs(dogsArray);
		});

		return () => unsub();
	}, []);

	return (
		<div>
			<div className='adoptionPage'>
				<div>
					<img
						className='firstImage'
						alt='dogs'
						src='https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					/>
				</div>

				<LoginControl />
				<div>
					<input
						placeholder='Name...'
						value={newName}
						onChange={(event) => {
							setNewName(event.target.value);
						}}
					/>
					<input
						placeholder='breed...'
						value={newBreed}
						onChange={(event) => {
							setNewBreed(event.target.value);
						}}
					/>
					<input
						placeholder='gender...'
						value={newGender}
						onChange={(event) => {
							setNewGender(event.target.value);
						}}
					/>
					<input
						type='number'
						placeholder='Age..'
						value={newAge}
						onChange={(event) => {
							setNewAge(event.target.value);
						}}
					/>
					<input
						placeholder='status...'
						onChange={(event) => {
							setNewStatus(event.target.value);
						}}
					/>

					<button onClick={createDog}> Create User</button>
				</div>

				<Container className='dogspage'>
					<Row>
						<Col sm={4}>
							<SideComp />
						</Col>

						<Col sm={8} className='dogstext'>
							<h1>Dogs for Adoption</h1>

							<p>
								We no longer accept walk-in visits.
								<br />
								Potential adopters should submit an{' '}
								<a href='/adopt/adoptionInterestForm'>
									<b>
										<em> adoption survey</em>
									</b>
								</a>{' '}
								if interested in meeting and adopting any of our dogs!
								<br />
								<a href='/adopt/adoptionProcess'>
									<b>
										<em> Click here</em>
									</b>
								</a>{' '}
								to learn more about our adoption process.
							</p>

							<div className='specialCare'>
								<h6 className='specialCareText'> ❤️ = Requires special care</h6>
							</div>
						</Col>
					</Row>
				</Container>

				<div className='profileCards'>
					<Container>
						<Row xs={1} md={3} className='g-4'>
							{dogs.map((dog) => (
								<Col key={dog.id}>
									<Card>
										<Card.Img
											variant='top'
											src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
										/>
										<div>
											{' '}
											<Card.Body className='cardBody'>
												<Card.Title>
													<h2>Name: {dog.name}</h2>
												</Card.Title>
												<Card.Text>
													<h3>Age: {dog.age}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Gender: {dog.gender}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Breed: {dog.breed}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Status: {dog.status}</h3>
												</Card.Text>

												<div>
													<button
														className='petbutton'
														onClick={() => {
															updateDog(dog.id, dog.age);
														}}>
														{' '}
														increase age
													</button>
													<button
														className='petbutton'
														onClick={() => {
															deleteDog(dog.id);
														}}>
														{' '}
														delete user
													</button>
													<button
														className='petbutton'
														onClick={() => {
															updateDogStatus(dog.id);
														}}>
														{' '}
														Adopt ME
													</button>
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
		</div>
	);
}

export default Dog;
