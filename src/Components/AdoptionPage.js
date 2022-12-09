/** @format */
import React from 'react';
import SideComp from './Sidecomp';

import { Nav, Container, Row, Col } from 'react-bootstrap';

function Adoption() {
	return (
		<div>
			<div className='adoptionPage'>
				<div>
					<img
						className='firstImage'
						alt='adoptPage'
						src='https://www.akc.org/wp-content/uploads/2015/06/Golden-Retriever-laying-down-playing-with-a-cat.jpeg'
					/>
				</div>

				<Container className='adoptionNav' id='adopt'>
					<Row>
						<Col sm={4}>
							<SideComp />
						</Col>

						<Col sm={8}>
							<Container className='petHeadshotLink'>
								<Row>
									<Col className='sm-6'>
										<Nav.Link href='/adopt/dog'>
											<img
												className='petHeadshot'
												alt='petProfile'
												src='./Images/dogImages/dog5.WebP'
											/>{' '}
										</Nav.Link>

										<Nav.Link href='/adopt/dog'>
											<button className='petButton'>Dogs</button>{' '}
										</Nav.Link>
									</Col>

									<Col className='sm-6'>
										<Nav.Link href='/adopt/cat'>
											<img
												className='petHeadshot'
												alt='petProfile'
												src='https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/fl_no_overflow,g_south,l_text:style_gothic2:%C2%A9%20Martin%20Tosh,o_20,y_10/fl_no_overflow,g_center,l_watermark4,o_25,y_50/v1585993327/l9xq21q97p1rtjngwhwu.jpg'
											/>{' '}
										</Nav.Link>

										<Nav.Link href='/adopt/cat'>
											<button className='petButton'>Cats</button>{' '}
										</Nav.Link>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>

				<div className='quote'>
					<img
						alt='petProfile'
						src='https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Devon-Rex-Striped.jpg'
					/>
					<div className='quoteText text-white bg-dark'>
						<p>
							”it’s not always possible to do what we want to do, but it’s
							important to believe in something before you actually do it."
						</p>
						<span className='bb-testimonial__author'>– Might Guy (Naruto)</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Adoption;
