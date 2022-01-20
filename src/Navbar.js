import React from 'react';
import "./App.css";
import  {Navbar, Nav, Button} from 'react-bootstrap';


function NavBar() {
  return ( 
    
    <div className='navbar'>
        <Navbar className="mx-auto" collapseOnSelect expand="md" variant="light" sticky="top">
          <Navbar.Brand href="/"><img className="logo align-middle" src='./Images/Logo.png' alt="brand logo"  /></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className="mx-4"href="/about"> About </Nav.Link>
                <Nav.Link className="mx-4"href = "/adopt" > Adopt </Nav.Link> 
                <Nav.Link className="mx-4"href = "/support" > Support </Nav.Link>
                <Nav.Link className="mx-4"href = "/volunteer" > Volunteer </Nav.Link> 
                <Nav.Link className="mx-4"href = "/shop" > Shop</Nav.Link> 
              </Nav>
              
              <Nav.Link href="/donate"> <Button className="donateButton mx-4"  >Donate</Button></Nav.Link>
                
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavBar;
