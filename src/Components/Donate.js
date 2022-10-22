/** @format */

import { useState, useEffect, useRef } from 'react';
import Footer from '../Footer';
import NavBar from '../Navbar';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const DonateButton = ({ currency, amount }) => {
	const amountRef = useRef(amount);
	useEffect(() => {
		amountRef.current = amount;
	}, [amount]);

	return (
		<div>
			<PayPalButtons
				style={{ label: 'donate' }}
				fundingSource='paypal'
				createOrder={(data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: amountRef.current,
									breakdown: {
										item_total: {
											currency_code: currency,
											value: amountRef.current,
										},
									},
								},
								items: [
									{
										name: "Kipu's Rescue",
										description:
											"All proceeds directly suport for animals' care and recovery.",
										quantity: '1',
										unit_amount: {
											currency_code: currency,
											value: amountRef.current,
										},
										category: 'DONATION',
									},
								],
							},
						],
					});
				}}
			/>
		</div>
	);
};

function DonateForm() {
	const [amount, setAmount] = useState('5.00');
	return (
		<form className='DonateForm'>
			<AmountPicker
				onAmountChange={(e) => {
					setAmount(e.target.value);
				}}
			/>
			<DonateButton currency='USD' amount={amount} />
		</form>
	);
}

function AmountPicker({ onAmountChange }) {
	return (
		<fieldset onChange={onAmountChange}>
			<legend>Donation Amount</legend>
			<label>
				<input type='radio' value='5.00' defaultChecked='true' name='amount' />
				5.00
			</label>
			<label>
				<input type='radio' value='10.00' name='amount' id='radio-6' />
				10.00
			</label>
			<label>
				<input type='radio' value='15.00' name='amount' id='radio-9' />
				15.00
			</label>
			<label>
				<input type='text' name='amount' />
				Enter an amount
			</label>
		</fieldset>
	);
}

function Donate() {
	return (
		<>
			<NavBar />

			<div className='aboutPage'>
				<PayPalScriptProvider
					options={{
						'client-id':
							'AQl7T--8BF0T18nVw82KAlDGjy2nDmJROIoIwsGa75Oo9LaKdTtGi1UNJCGn85hDBMHT923S_3dHAZeN',
						components: 'buttons',
						currency: 'USD',
					}}>
					<h1>Your gift will change a pet’s life!</h1>
					<figure>
						<img
							src='https://placekitten.com/500/300'
							alt='Kitty Looking Cute'
						/>
						<figcaption
							className='donationForm'
							style={{ backgroundColor: 'white' }}>
							At Kipu's Rescue, we work every day to find homes for dogs and
							cats in crisis. We're committed to providing the best possible
							care for their specific needs while they wait. You can create hope
							for them: your donation provides healthy food, comfortable
							bedding, vital enrichment, training and medical intervention.
							Donate today! All Donation proceeds to care of animals at Kipu's
							Rescue{' '}
						</figcaption>
					</figure>

					<h2>Make a secure Donation using PayPal</h2>
					<DonateForm />
				</PayPalScriptProvider>
			</div>
			<Footer />
		</>
	);
}

export default Donate;
