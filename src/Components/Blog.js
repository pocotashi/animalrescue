/** @format */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideComp from './Sidecomp';

function Blog() {
	return (
		<div>
			<div className='adoptionPage'>
				<div>
					<img
						className='firstImage'
						alt='dogs'
						src='https://cdn.wallpapersafari.com/84/33/Jtva0n.jpg'
					/>
				</div>

				<Container className='adoptionNav'>
					<Row>
						<Col xs={4}>
							<SideComp />
						</Col>

						<Col xs={1}>
							<p class='vertical_dotted_line'></p>
						</Col>

						<Col xs={7}>
							<h1>Coming Soon</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Blog;
