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

                    <Container>
                        <Row>
                            <Col xs={6} className="homePetText">
                                <h1>Save an Animal</h1>
                                <Nav.Link href="/donate"><button className="homeBacklink">Donate Today</button></Nav.Link>
                            </Col>

                            <Col xs={6} className="homePetTextB">
                                <h1>View Our Pets</h1>
                                <Nav.Link href="/adopt"><button className="homeBacklink">Visit Us</button></Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                    

                </div>

                    <div className="homeNews">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Endlessknot.svg/1024px-Endlessknot.svg.png" height={"120px"} width={"150px"} alt="logo"/>
                        <h3 className="homelogo"><strong>*Our operating hours are BY APPOINTMENT ONLY*</strong></h3>
                        <p>Please view our adoption process page for more information.</p>

                        <br/>

                        <p>We find homes for abandoned cats and dogs in New York City and throughout the Tri-State area, and provide behavior intervention when needed to improve chances of adoption.</p>
                        <p>Please view our <strong>adoptable pets</strong> <a href="/adopt/#adopt"><strong><em> here</em></strong></a> if you’re interested in adoption!</p>


                            <div className="newsletter">
                                    
                                    <h3>Help us save animals. Join Us:</h3>
                                        <input placeholder="Email Address" />
                                   
                                        <input placeholder="Last Name" />
                                    
                                        <input placeholder="First Name" />
                                    
                                       <div><button className="homeButton">Yes!</button></div>
                                        
                                        
                                    

                            </div>
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