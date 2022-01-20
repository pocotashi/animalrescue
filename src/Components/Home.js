import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import {Nav, Container, Row, Col} from "react-bootstrap";



function Home() {
    return (
        <div>
            <NavBar/>

            <div>
                <div className="homeImage">
                    <img className="firstImage" alt="adoptPage" src="https://149366112.v2.pressablecdn.com/wp-content/uploads/2020/10/shutterstock_1186076164-1536x1024.jpg"/>


                    <div className="homeDonateText">
                        <h1>Save an Animal</h1>

                        <Nav.Link href="/donate"><button className="homeButton">Donate Today</button></Nav.Link>
                    </div>

                    {/* <div className="homePetText">
                        <h1>View Our Pets</h1>

                        <Nav.Link href="/adopt"><button className="homeButton">Visit Us</button></Nav.Link>
                    </div> */}
                    
                
                
                
                </div>

                    <div className="homeNews">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Endlessknot.svg/1024px-Endlessknot.svg.png" height={"120px"} width={"150px"} alt="logo"/>
                        <h3 className="homelogo"><strong>*Our operating hours are BY APPOINTMENT ONLY*</strong></h3>
                        <p>Please view our adoption process page for more information.</p>

                        <br/>

                        <p>We find homes for abandoned cats and dogs in New York City and throughout the Tri-State area, and provide behavior intervention when needed to improve chances of adoption.</p>
                        <p>Please view our adoptable pets here if you’re interested in adoption!</p>


                            <Container  className="newsletter">
                                <Row>
                                    
                                    <Col xs={3}>
                                        <input placeholder="Email Address" />
                                    </Col>

                                    <Col xs={3}>
                                        <input placeholder="First Name" />
                                    </Col>

                                    <Col xs={3}>
                                        <input placeholder="Last Name" />
                                    </Col>
                                    
                                    <Col xs={3}>
                                        <div>
                                            <button className="homeButton">Yes!</button>
                                        </div>
                                    </Col>

                                </Row>
                            </Container>
                    </div>

                    {/* <div >
                        <h1>Make the donation area with buttons</h1>
                    </div> */}






            </div>
            <Footer/>
        </div>
    )
}

export default Home;