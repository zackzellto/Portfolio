import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function ResponsiveNavbar() {
  return (
   
  <Navbar collapseOnSelect expand={'lg'} fixed='top' style={{width: "100" }}>
    <Container>
    <Navbar.Brand style={{color: "white"}} href="#home-section">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-links ms-auto">
      <Nav.Link style={{color: "white"}} className='about-me-link' href="#about-section">0. About Me</Nav.Link>
      <Nav.Link style={{color: "white"}} className='portfolio-link'href="#projects-section">1. Projects</Nav.Link>
      <Nav.Link style={{color: "white"}} className='resume-link' href="#resume-section">2. Resume</Nav.Link>
      <Nav.Link style={{color: "white"}} className='contact-link' href="#contact-section">3. Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default ResponsiveNavbar;