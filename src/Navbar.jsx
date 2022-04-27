import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import MyLogo from './media/zackzellto-logo.png'
import "bootstrap/dist/css/bootstrap.min.css";



function ResponsiveNavbar() {
  return (
<Navbar id='portfolio-navbar' collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home-section"><Image id='zack-logo' src={MyLogo}></Image></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className='offcanvas-header' tabIndex='-1' id="responsive-navbar-nav">
    <Nav className="ms-auto">
         <Nav className="justify-content-end flex-grow-1 pe-2">
         <Nav.Link href="#about-section"><span id='nav-num'>0. </span>About</Nav.Link>
           <Nav.Link href="#projects-section"><span id='nav-num'>1. </span>Projects</Nav.Link>
           <Nav.Link href="#resume-section"><span id='nav-num'>2. </span>Resume</Nav.Link>
           <Nav.Link href="#contact-section"><span id='nav-num'>3. </span>Contact</Nav.Link>
         </Nav>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default ResponsiveNavbar;  
