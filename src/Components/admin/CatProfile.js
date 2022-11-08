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

function CatProfile() {
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState();
	const [newGender, setNewGender] = useState('');
	const [newBreed, setNewBreed] = useState('');
	const [newStatus, setNewStatus] = useState('available');
	const [specialCare, setSpecialCare] = useState('');

	const [cats, setCats] = useState([]);

	const catsCollectionRef = collection(db, 'cats');

	const createCat = async () => {
		await addDoc(catsCollectionRef, {
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

	const updateCatAge = async (id, age) => {
		const catDoc = doc(db, 'cats', id);
		const newFields = { age: age + 1 };
		await updateDoc(catDoc, newFields);
	};

	const updateCatStatus = async (id, status) => {
		const catDoc = doc(db, 'cats', id);
		const newStats = { status: (status = 'adopted') };
		await updateDoc(catDoc, newStats);
	};

	const specialCareNeed = async (id, care) => {
		const catDoc = doc(db, 'cats', id);
		const specialCare = { specialCare: (care = '❤️') };
		await updateDoc(catDoc, specialCare);
	};

	const specialCareNone = async (id, care) => {
		const catDoc = doc(db, 'cats', id);
		const specialCare = { specialCare: (care = 'n/a') };
		await updateDoc(catDoc, specialCare);
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

				<button onClick={createCat}> Create User</button>
			</div>

			{cats.map((cat) => (
				<div key={cat.id}>
					<h6>{cat.name}</h6>

					<button
						className='petbutton'
						onClick={() => {
							updateCatAge(cat.id, cat.age);
						}}>
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
					<button
						className='petbutton'
						onClick={() => {
							specialCareNeed(cat.id);
						}}>
						{' '}
						Xtra Care Needed
					</button>
					<button
						className='petbutton'
						onClick={() => {
							specialCareNone(cat.id);
						}}>
						{' '}
						Xtra Care not Needed
					</button>
				</div>
			))}
		</div>
	);
}

export default CatProfile;
