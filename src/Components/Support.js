/** @format */

import { Container, Row, Col } from 'react-bootstrap';

function Support() {
	return (
		<div>
			<div>
				<img
					className='firstImage'
					alt='adoptPage'
					src='https://usserviceanimals.org/blog/wp-content/uploads/2019/08/1530083188458-768x599.png'
				/>
			</div>

			<div className='support'>
				{/* <Container>
                    <Row>
                        <Col xs={8}> */}
				<div className='supportTitle'>
					<h1>Suport Kipu's Rescue</h1>

					<h6>
						There are many ways you can make a difference for the dogs and cats
						at Kipu's Rescue!
					</h6>
				</div>

				<h3>
					<strong>Donation</strong>
				</h3>
				<p>
					Your donation saves lives. With it, we can give animals the help they
					need.
					<a href='/donate'>
						<em>
							<strong> Donate Now</strong>
						</em>
					</a>
				</p>

				<h3>
					<strong>Adopt a pet</strong>
				</h3>
				<p>
					We believe in a communit based rescue approach. Working together we
					can make the world a better palce for animals.
					<a href='/adopt/#adopt'>
						<em>
							<strong> Check out</strong>
						</em>
					</a>{' '}
					our pets!
				</p>

				<h3>
					<strong>Become a Volunteer</strong>
				</h3>
				<p>
					Join our team! It's easy to make a difference in the lives of animals.
					We have many oppourtunies available!
					<a href='/volunteer'>
						<em>
							<strong> Check out our volunteer page</strong>
						</em>
					</a>
				</p>

				<h3>
					<strong>Shop Our Online Store</strong>
				</h3>
				<p>
					Suport Kipu's Rescue by buying our branded merchandise!
					<a href='/shop'>
						<em>
							<strong> Shop here</strong>
						</em>
					</a>
				</p>
				{/* </Col> */}

				{/* <Col xs={4}>
                            <img width={"400"} height={"400"}  alt="support pic" src="https://usserviceanimals.org/blog/wp-content/uploads/2019/08/1530083188458-768x599.png"/>
                        </Col> */}
				{/* </Row>
                </Container> */}
			</div>
		</div>
	);
}

export default Support;
