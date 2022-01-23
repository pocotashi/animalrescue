import { Container, Row, Col} from "react-bootstrap";
import NavBar from '../Navbar';
import SideComp from './Sidecomp';
import Footer from '../Footer';

function AdoptionProcess () {
    return (
        <div>
            <NavBar/>

            <div className="adoptionPage">

                <Container className="adoptionNav">
                    <Row className="adoptProcess">
                        <Col sm={4}>
                            <SideComp/>
                        </Col>

                        <Col sm={8} className="processHead">
                            <h1>Adoption Process</h1>

                            <h3>July 2021 update!</h3>

                            <p>We’re so happy you’re interested in learning more about adopting with us! We are now able to accommodate more appointments to meet our animals! We still are unable to accommodate walk-in visits at this time. We ask that all visitors provide proof of vaccination upon entry or wear a mask during their visit.</p>


                            <h6><strong>Below is an outline of our adoption process:</strong></h6>


                            <ul>
                                <li>Take a look at our <a href="/adopt/#adopt"><strong>adoptable animals!</strong></a> We ask that adopters have a specific animal or a few in mind before reaching out to make an appointment.</li>
                                <li><a href="/adopt/adoptionInterestForm"><strong>Contact</strong></a> us by filling out an adoption inquiry to get in touch with a staff member. We’ll be able to provide more information on the animal(s) you’re interested in and can set up an appointment for you to meet them!Please allow a few days for a reply. We try to get back to everyone within 1-2 days, but sometimes we experience a large volume of inquiries and may be delayed. We are a very small team working to get back to everyone! We thank you so much for your patience and understanding while you wait.</li>
                                <li>Appointments to meet our animals are available from Tuesday-Friday, 2-6pm with limited availability on the weekends.</li>
                                <li>After meeting our animals at our facility, you can fill out an application if you’d like to apply to adopt them! Please note, the adoption inquiry above is not our application! For dogs, it may take a few days to process. Cats can often be processed same day.
                                <br/>
                                    * If applying for a dog, we do ask for proof that you can have a dog where you live. Such as a pet policy on your lease, a letter from your building management, or proof of ownership if you own. Bringing this documentation with you during your visit will expedite the processing time of your application.</li>
                                <li>It may take more than one meet and greet to approve your application, especially with some of our dogs. Ideally, every member of the household will need to meet the animal at some point during the process. Meeting the animal does not guarantee approval of adoption.</li>
                                <li>We take multiple applications on all of our animals in an effort to find the best fit possible in a timely manner. If the animal you are interested in is adopted before you can complete the process, we are happy to work with you to find another potential match.</li>
                            </ul>

                            <div className="thankyou">
                                <h6><strong>Please Note:</strong></h6>
                                <h6><strong>Meeting the animal does not guarantee approval of adoption.</strong></h6>
                                <h6><strong>Kipu’s Rescue reserves the right to refuse any adoption.</strong></h6>
                            </div>

                            <h6><strong>Adoptions</strong></h6>
                            <p>Cats and dogs are available for adoption at Animal Haven.</p>

                            <h6><strong>Fees are:</strong></h6>

                            <ul>
                                <li>$175 per cat</li>
                                <li>$200 per kitten or $300 per pair (Why Two Kittens Are Better Than One)</li>
                                <li>$295 per dog over 1 year (includes collar and leash)</li>
                                <li>$395 per puppy 4 months to 1 year old (includes collar and leash)</li>
                                <li>$450 per puppy under 4 months old (includes collar and leash)</li>
                            </ul>

                            <h6><strong>Our adoption fee covers spay/neuter, core vaccines, and microchip.</strong></h6>

                            <h6><strong>Requirements:</strong></h6>
                            
                            <ul>
                                <li>You must be 21 to adopt.</li>
                                <li>All interested adopters must meet our animals in-person at the shelter – we cannot accommodate digital appointments.</li>
                                <li>We ask for a personal reference (this can be a family member, friend, employer) who can attest to your ability to care for a pet.</li>
                                <li>Adopters who live in apartments will be required to show proof that pets are allowed. This can be provided in the form of a lease, phone number of a leasing office, landlord, super or property website.</li>
                                <li>If you currently or previously had a pet, a vet reference will be required.</li>
                                <li>We ask that all members of the household meet the animal at some point during the adoption process.</li>
                                <li>We do require the current dogs of the household meet the dog you are applying for as well – but this is often the last step of the process.</li>
                            </ul>

                            <h6>Be sure to check out our <a href="/about/faq"><strong>FAQ</strong></a> page for answers to frequently asked questions.</h6>


                        </Col>
                    </Row>
                </Container>



            </div>



            <Footer/>

        </div>
    )
}

export default AdoptionProcess;