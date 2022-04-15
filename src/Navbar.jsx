import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function ResponsiveNavbar() {
  return (
   
  <Navbar collapseOnSelect expand={'lg'} fixed='top'>
    <Container>
    <Navbar.Brand href="#home">Zack Zellto</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-links mr-auto">
      <Nav.Link className='about-me-link' href="#about-me">About Me</Nav.Link>
      <Nav.Link className='portfolio-link'href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link className='resume-link' href="#resume">Resume</Nav.Link>
      <Nav.Link className='contact-link' href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
   
  );
}

export default ResponsiveNavbar;