/** @format */

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

function Cat() {
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState();
	const [newGender, setNewGender] = useState('');
	const [newBreed, setNewBreed] = useState('');
	const [newStatus, setNewStatus] = useState('available');

	const [cats, setCats] = useState([]);

	const catsCollectionRef = collection(db, 'cats');

	const createCat = async () => {
		await addDoc(catsCollectionRef, {
			name: newName,
			age: Number(newAge),
			gender: newGender,
			breed: newBreed,
			status: newStatus,
		});

		setNewName('');
		setNewAge('');
		setNewGender('');
		setNewBreed('');
		setNewStatus('');
	};

	const updateCat = async (id, age) => {
		const catDoc = doc(db, 'cats', id);
		const newFields = { age: age + 1 };
		await updateDoc(catDoc, newFields);
	};

	const updateCatStatus = async (id, status) => {
		const catDoc = doc(db, 'cats', id);
		const newStats = { status: (status = 'adopted') };
		await updateDoc(catDoc, newStats);
	};

	const deleteCat = async (id) => {
		const catDoc = doc(db, 'cats', id);
		await deleteDoc(catDoc);
	};

	useEffect(() => {
		const data = query(catsCollectionRef);
		const unsub = onSnapshot(data, (querySnapshot) => {
			let catsArray = [];
			querySnapshot.forEach((doc) => {
				catsArray.push({ ...doc.data(), id: doc.id });
			});
			setCats(catsArray);
		});

		return () => unsub();
	}, []);

	return (
		<div>
			<div className='adoptionPage'>
				<div>
					<img
						className='firstImage'
						alt='cats'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU'
					/>
				</div>

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

					<button onClick={createCat}> Create User</button>
				</div>

				<Container className='dogspage'>
					<Row>
						<Col sm={4}>
							<SideComp />
						</Col>

						<Col sm={8} className='dogstext'>
							<h1>Cats for Adoption</h1>

							<p>
								We no longer accept walk-in visits.
								<br />
								Potential adopters should submit an{' '}
								<a href='/adopt/adoptionInterestForm'>
									<b>
										<em> adoption survey</em>
									</b>
								</a>{' '}
								if interested in meeting and adopting any of our cats!
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
							{cats.map((cat) => (
								<Col key={cat.id}>
									<Card>
										<Card.Img
											variant='top'
											src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'
										/>
										<div>
											{' '}
											<Card.Body className='cardBody'>
												<Card.Title>
													<h2>Name: {cat.name}</h2>
												</Card.Title>
												<Card.Text>
													<h3>Age: {cat.age}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Gender: {cat.gender}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Breed: {cat.breed}</h3>
												</Card.Text>
												<Card.Text>
													<h3>Status: {cat.status}</h3>
												</Card.Text>

												<div>
													<button
														className='petbutton'
														onClick={() => {
															updateCat(cat.id, cat.age);
														}}>
														{' '}
														increase age
													</button>
													<button
														className='petbutton'
														onClick={() => {
															deleteCat(cat.id);
														}}>
														{' '}
														delete user
													</button>
													<button
														className='petbutton'
														onClick={() => {
															updateCatStatus(cat.id);
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

export default Cat;
