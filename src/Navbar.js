/** @format */

import React from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand='lg' variant='light'>
			<Container fluid>
				<Navbar.Brand href='/'>
					<img
						className='logo align-middle'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Endlessknot.svg/1024px-Endlessknot.svg.png'
						alt='brand logo'
					/>
					<h4 className='logoText'>Kipu's Rescue</h4>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />

				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto navbar-nav justify-content-evenly flex-grow-1'>
						<Nav.Link href='/about'> About </Nav.Link>
						<Nav.Link href='/adopt'> Adopt </Nav.Link>
						<Nav.Link href='/support'> Support </Nav.Link>
						<Nav.Link href='/volunteer'> Volunteer </Nav.Link>
						<Nav.Link href='/shop'> Shop</Nav.Link>
					</Nav>
					<Nav.Link href='/donate'>
						<button className='donateButton'>Donate</button>
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
