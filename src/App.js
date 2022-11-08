/** @format */

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Components/Home';

import About from './Components/About';
import Faq from './Components/FAQ';

import Adoption from './Components/AdoptionPage';
import Dog from './Components/Dog';
import Cat from './Components/Cat';
import AdoptionInterestForm from './Components/AdoptionInterestForm';
import AdoptionProcess from './Components/AdoptionProcess';

import Support from './Components/Support';
import Blog from './Components/Blog';
import Volunteer from './Components/Volunteer';
import Donate from './Components/Donate';

import Shop from './Components/Shop';
import Cart from './Components/Cart';

import Login from './login';

import DogProfile from './Components/admin/DogProfile';
import CatProfile from './Components/admin/CatProfile';

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/about' element={<About />} />
				<Route path='/about/faq' element={<Faq />} />

				<Route path='/adopt' element={<Adoption />} />
				<Route path='/adopt/dog' element={<Dog />} />
				<Route path='/adopt/cat' element={<Cat />} />
				<Route
					path='/adopt/adoptionInterestForm'
					element={<AdoptionInterestForm />}
				/>
				<Route path='/adopt/adoptionProcess' element={<AdoptionProcess />} />

				<Route path='/adopt/blog' element={<Blog />} />
				<Route path='/support' element={<Support />} />
				<Route path='/volunteer' element={<Volunteer />} />

				<Route path='/shop' element={<Shop />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/donate' element={<Donate />} />

				<Route path='/login' element={<Login />} />
				<Route path='/createDogs' element={<DogProfile />} />
				<Route path='/createCats' element={<CatProfile />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
