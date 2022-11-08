/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import {
	addDoc,
	collection,
	updateDoc,
	deleteDoc,
	doc,
	onSnapshot,
	query,
} from 'firebase/firestore';

function DogProfile() {
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState();
	const [newGender, setNewGender] = useState('');
	const [newBreed, setNewBreed] = useState('');
	const [newStatus, setNewStatus] = useState('available');
	const [specialCare, setSpecialCare] = useState('');

	const [dogs, setDogs] = useState([]);

	const dogsCollectionRef = collection(db, 'dogs');

	const createDog = async () => {
		await addDoc(dogsCollectionRef, {
			name: newName,
			age: Number(newAge),
			gender: newGender,
			breed: newBreed,
			status: newStatus,
			specialCare: specialCare,
		});

		setNewName('');
		setNewAge('');
		setNewGender('');
		setNewBreed('');
		setNewStatus('');
		setSpecialCare('');
	};

	const updateDogAge = async (id, age) => {
		const dogDoc = doc(db, 'dogs', id);
		const newFields = { age: age + 1 };
		await updateDoc(dogDoc, newFields);
	};

	const updateDogStatus = async (id, status) => {
		const dogDoc = doc(db, 'dogs', id);
		const newStats = { status: (status = 'adopted') };
		await updateDoc(dogDoc, newStats);
	};

	const specialCareNeed = async (id, care) => {
		const dogDoc = doc(db, 'dogs', id);
		const specialCare = { specialCare: (care = '❤️') };
		await updateDoc(dogDoc, specialCare);
	};

	const specialCareNone = async (id, care) => {
		const dogDoc = doc(db, 'dogs', id);
		const specialCare = { specialCare: (care = 'n/a') };
		await updateDoc(dogDoc, specialCare);
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
		<div className='adoptionPage'>
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
				<input
					placeholder='special care...'
					onChange={(event) => {
						setSpecialCare(event.target.value);
					}}
				/>

				<button onClick={createDog}> Create User</button>
			</div>

			{dogs.map((dog) => (
				<div key={dog.id}>
					<h6>{dog.name}</h6>

					<button
						className='petbutton'
						onClick={() => {
							updateDogAge(dog.id, dog.age);
						}}>
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
					<button
						className='petbutton'
						onClick={() => {
							specialCareNeed(dog.id);
						}}>
						{' '}
						Xtra Care Needed
					</button>
					<button
						className='petbutton'
						onClick={() => {
							specialCareNone(dog.id);
						}}>
						{' '}
						Xtra Care not Needed
					</button>
				</div>
			))}
		</div>
	);
}

export default DogProfile;
