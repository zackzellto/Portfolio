import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function ResponsiveNavbar() {
  return (
  <Navbar collapseOnSelect expand={'lg'} fixed='top' style={{width: "100" }}>
    <Container>
    <Navbar.Brand style={{color: "white"}} href="#home-section">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-links ms-auto">
      <Nav.Link style={{color: "white"}} className='about-me-link' href="#about-section"><span id='nav-num'>0.</span> About Me</Nav.Link>
      <Nav.Link style={{color: "white"}} className='portfolio-link'href="#projects-section"><span id='nav-num'>1.</span> Projects</Nav.Link>
      <Nav.Link style={{color: "white"}} className='resume-link' href="#resume-section"><span id='nav-num'>2.</span> Resume</Nav.Link>
      <Nav.Link style={{color: "white"}} className='contact-link' href="#contact-section"><span id='nav-num'>3.</span> Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default ResponsiveNavbar;