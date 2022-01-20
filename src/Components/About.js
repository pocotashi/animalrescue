import NavBar from "../Navbar";
import Footer from "../Footer";
import { Container, Row, Col} from "react-bootstrap";


function About() {
    return (
        <div>
            <NavBar/>

            <div className="aboutPage">
                <h1 >About Kipu's Rescue</h1>

                <Container className="aboutNav">
                    <Row>
                        <Col className="xs-6 ">
                            <h3>Mission</h3>
                            <p>Kipu's Rescue is a nonprofit organization that finds homes for abandoned cats and dogs throughout the Tri-State area and provides behavior intervention when needed to improve chances of adoption.  Founded in 1967, we operate an animal shelter in Manhattan. We also provide programs that enhance the bond between animals and people.</p>
                            <p>Kipu's Rescue  is a 501(c)(3) nonprofit organization (EIN: 11-6101487).</p>
                            
                        </Col>

                        <Col className="xs-6 sidepic ">
                            <img alt="dogpic" src="https://animalhaven.org/wp-content/uploads/2020/09/Golu-04296.png" />
                        </Col>
                    </Row>
                </Container>

                <Container className="aboutNav">
                    <Row>
                        <Col className="xs-5 ">
                            <h3>Location</h3>
                            <p>200 Centre Street
                            <br/>
                            New York, Ny 10013</p>

                            <h3>Phone</h3>
                            <p>212.274.8511</p>
                            
                            <h3>Hours</h3>
                            <p><srtong>By Appointment Only.</srtong></p>

                            <a href="/about/faq"><h1>FAQs</h1></a>

                        </Col>

                        <Col className="xs-7 sidepic">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9635978676633!2d-74.00124998467135!3d40.718817845135426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25989c192f425%3A0x1deaf94b68489dc2!2sAnimal%20Haven!5e0!3m2!1sen!2sus!4v1642699282421!5m2!1sen!2sus" width="400" height="400"  allowfullscreen="" loading="lazy"/>
                        </Col>
                    </Row>
                </Container>

            </div>


            <Footer/>

        </div>
    )
}

export default About;