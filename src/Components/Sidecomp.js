import {Nav} from 'react-bootstrap';


function SideComp() {
    return (
        <div className="sidecomp">

            <Nav.Link href="/adopt/dog"><h3 className="sidecomp">Dogs</h3></Nav.Link>
            <Nav.Link href="/adopt/cat"><h3 className="sidecomp">Cats</h3></Nav.Link>
            <Nav.Link href="/adopt/adoptionProcess"><h3 className="sidecomp">Adoption Process</h3></Nav.Link>
            <Nav.Link href="/adopt/adoptionInterestForm"><h3 className="sidecomp">Adoption Interest Form</h3></Nav.Link>
            <Nav.Link href="/adopt/blog"><h3 className="sidecomp">Success Stories</h3></Nav.Link>




        </div>
    )
}

export default SideComp;