import SideComp from "./Sidecomp";
import NavBar from "../Navbar";
import Footer from "../Footer";
import {Nav, Container, Row, Col} from "react-bootstrap";


function Adoption () {

    return (
        <div>
            <NavBar/>
            
            <div className="adoptionPage">

            <div>
                <img className="firstImage" alt="adoptPage" src="https://www.akc.org/wp-content/uploads/2015/06/Golden-Retriever-laying-down-playing-with-a-cat.jpeg"/>
            </div>

            <Container className="adoptionNav" id="adopt">
                <Row>

                    <Col xs={3}>
                        <SideComp/>

                        {/* <p class="vertical_dotted_line"></p>                         */}
                    </Col>

                    <Col xs={1} ><p className="vertical_dotted_line"></p></Col>
                    

                    <Col xs={8}>
                        <Container className="petHeadshotLink">
                            <Row>
                                <Col className="xs-6 ">
                                    
                                    <Nav.Link href="/adopt/dog"><img className="petHeadshot" alt="petProfile"  src="https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/dog-photography-tips.jpg" /> </Nav.Link>

                                    <Nav.Link href="/adopt/dog"><button className="petButton">Dogs</button> </Nav.Link>
                                    
                                </Col>

                                <Col className="xs-6 ">
                                    <Nav.Link href="/adopt/cat"><img className="petHeadshot" alt="petProfile" src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/fl_no_overflow,g_south,l_text:style_gothic2:%C2%A9%20Martin%20Tosh,o_20,y_10/fl_no_overflow,g_center,l_watermark4,o_25,y_50/v1585993327/l9xq21q97p1rtjngwhwu.jpg" /> </Nav.Link>

                                    <Nav.Link href="/adopt/cat"><button className="petButton">Cats</button> </Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

                
                <div className="quote">
                            <img alt="petProfile" src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Devon-Rex-Striped.jpg" />
			 				<div className="quoteText">
                                <p>” Ike is our little buddy. He is wherever the kids are. We love this boy and the extra fun he brings to our family. Adopting Ike was a great decision and we are so happy he is in our life.”</p>
								<span className="bb-testimonial__author">Ike and Family</span>	
							</div>				
				</div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Adoption;