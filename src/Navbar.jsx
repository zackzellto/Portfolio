import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function ResponsiveNavbar() {
  return (
   
  <Navbar collapseOnSelect expand={'lg'} fixed='top' style={{width: "100" }}>
    <Container>
    <Navbar.Brand href="#home-section">Zack Zellto</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-links ms-auto">
      <Nav.Link className='about-me-link' href="#about-section">About Me</Nav.Link>
      <Nav.Link className='portfolio-link'href="#projects-section">Projects</Nav.Link>
      <Nav.Link className='resume-link' href="https://drive.google.com/uc?export=download&id=1fpOclex1j8RmznkbDY9x10z8hfG6SOp8">Resume</Nav.Link>
      <Nav.Link className='contact-link' href="#contact-section">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
   
  );
}

export default ResponsiveNavbar;