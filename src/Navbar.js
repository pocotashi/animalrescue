import React from 'react';
import "./App.css";
import  {Navbar, Nav, Button} from 'react-bootstrap';


function NavBar() {
  return ( 
    
    <div className='navbar'>
        <Navbar className="mx-auto" collapseOnSelect expand="md" variant="light" sticky="top">
          <Navbar.Brand href="/">
          
          
          <img className="logo align-middle" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Endlessknot.svg/1024px-Endlessknot.svg.png" 
          alt="brand logo"
          /> 
          <h4 className="logoText">Kipu's Rescue</h4> 

          
          
          
          </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
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
