import NavBar from "../Navbar";
import Footer from "../Footer";
import { Container, Row, Col} from "react-bootstrap";


function Volunteer() {
    return (
        <div>
            <NavBar/>

            <div>
                <img className="firstImage" alt="volunteerPage" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cats-and-dogs-together-white-web-banner-good-focused.jpg"/>
            </div>

            <div className="support">

                <div className="supportTitle">
                    <h1 >Volunteer with Kipu's Rescue</h1>

                    <p>Volunteers are the backbone of our facility and aid our staff in daily operations. 
                    

                    <br/>
                    While we do have individuals that prefer to concentrate on one specific area (i.e. cats, cleaning), 
                    

                    <br/>
                    the majority of our volunteers are multifaceted.</p>
                </div>

                <Container>
                    <Row>
                        <Col className="sm-6 ">
                        <h6>The volunteer experience at the shelter includes (but is not limited to):</h6>
                        <ul>
                            <li>cleaning animal areas and facility</li>
                            <li>speaking to public about Kipu's Rescue mission</li>
                            <li>dog walking / feeding / handling</li>
                            <li>cat socializing / feeding / handling</li>
                            <li>bathing animals</li>
                            <li>greeting guests for special events</li>
                        </ul>
                        </Col> 
                        <Col className="sm-6">
                            <img src="https://animalhaven.org/wp-content/uploads/2019/09/Volunteer-03666-2-376x450.jpg" alt="volunteer"/>
                        </Col>
                    </Row>
                </Container> 


                <div className="support">
                    <p>If there is anything you are physically unable to do, please notify us before you begin volunteering.</p>

                    <p>We’ve temporarily stopped accepting new volunteer applications,
but please check back here in early 2022 if you’re interested in volunteering!</p>


                <p>If you are interested in fostering, please checkout our <a href="/adopt/#adopt"><strong> adoptable animals</strong></a> and fill up the foster form.
                If you need help with the process please <a href="/about/#contact"><strong> contact us</strong></a> and we will help you get started and complete the process.</p>


                </div>

                            
                          


                        
                

            </div>
            <Footer/>
        </div>
    )
}

export default Volunteer;