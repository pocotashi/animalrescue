/** @format */

import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
	addDoc,
	collection,
	query,
	onSnapshot,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import { Container, Row, Col } from 'react-bootstrap';

import SideComp from './Sidecomp';

function AdoptionInterestForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [interest, setInterest] = useState('');
	const [comment, setComment] = useState('');
	const isEnabled =
		name.length > 0 &&
		email.length > 0 &&
		phone.length > 0 &&
		interest.length > 0;

	const [adoption, setNewAdopt] = useState([]);

	const adoptCollectionRef = collection(db, 'adoption');

	const adoptPet = async () => {
		await addDoc(adoptCollectionRef, {
			name: name,
			phone: Number(phone),
			email: email,
			animalOfInterest: interest,
		});

		setName('');
		setEmail('');
		setPhone('');
		setInterest('');
		setComment('');
	};

	const deletePet = async (id) => {
		const petDoc = doc(db, 'adoption', id);
		await deleteDoc(petDoc);
	};

	useEffect(() => {
		const data = query(adoptCollectionRef);
		const unsub = onSnapshot(data, (querySnapshot) => {
			let adoptionArray = [];
			querySnapshot.forEach((doc) => {
				adoptionArray.push({ ...doc.data(), id: doc.id });
			});
			setNewAdopt(adoptionArray);
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
						src='https://th-thumbnailer.cdn-si-edu.com/ljDviQzHYQCU0QPuhtY4y5VW6sw=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/03/5c/035c23fd-f709-4696-9691-1e95c86f3428/nagasawa1hr.jpg'
					/>
				</div>

				<Container className='adoptionNav'>
					<Row className='adoptProcess'>
						<Col sm={4}>
							<SideComp />
						</Col>

						<Col sm={8} className='processHead'>
							<h1>Adoption Interest Form</h1>

							<p>
								Interested in adopting one of our cats or dogs? Please fill out
								the form below to get in contact with one of our staff members
								for more information.
							</p>

							<p>
								Did you know that you can find answers to many of your questions
								on our{' '}
								<a href='/about'>
									<strong>About</strong>
								</a>{' '}
								and{' '}
								<a href='/about/faq'>
									<strong>FAQ</strong>
								</a>{' '}
								pages? Please be sure to check these pages for details on our
								adoption process, fees, hours, location, and more before
								emailing with questions.
							</p>

							<h3>THIS IS NOT AN ADOPTION APPLICATION</h3>
						</Col>
					</Row>
				</Container>

				<div className='form'>
					<h3>THIS FORM IS NOT AN ADOPTION APPLICATION *</h3>

					<div>
						I acknowledge that this form is NOT adoption application for Kipu's
						Rescue <input type='checkbox' />{' '}
					</div>

					<div className='formPad'>
						<label>
							{' '}
							Name
							<input
								type='text'
								placeholder='name...'
								value={name}
								onChange={(event) => {
									setName(event.target.value);
								}}
								required
							/>
						</label>

						<label>
							{' '}
							Email
							<input
								type='email'
								placeholder='email...'
								value={email}
								onChange={(event) => {
									setEmail(event.target.value);
								}}
								required
							/>
						</label>
					</div>

					<div className='formPad'>
						<label>
							{' '}
							Phone
							<input
								type='number'
								placeholder='phone...'
								value={phone}
								onChange={(event) => {
									setPhone(event.target.value);
								}}
								required
							/>
						</label>

						<label>
							{' '}
							Animal's Name
							<input
								type='text'
								placeholder="animals' name "
								value={interest}
								onChange={(event) => {
									setInterest(event.target.value);
								}}
								required
							/>
						</label>
					</div>

					<div className='formPad'>
						<label>
							Additional Questions or Comments
							<textarea
								value={comment}
								onChange={(event) => {
									setComment(event.target.value);
								}}></textarea>
						</label>
					</div>

					<div className='formPad'>
						<button
							className='btn btn-block'
							onClick={adoptPet}
							disabled={!isEnabled}>
							Send Form
						</button>
					</div>
				</div>
				{/* {adoption.map((adoptPet) => {
                return (
                    <div key={adoptPet.id}>
                        <h1>Name: {adoptPet.animalOfInterest}</h1>
                        <button onClick={ ()=> {deletePet(adoptPet.id)}}> delete info</button>

                    </div>
                )
            })} */}
			</div>
		</div>
	);
}

export default AdoptionInterestForm;
