import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



function ResponsiveNavbar() {
  return (
<Navbar id='navbar' bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#home-section">Zack Zellto</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body id='offcanvas-body'>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#about-section"><span id='nav-num'>0. </span>About</Nav.Link>
          <Nav.Link href="#projects-section"><span id='nav-num'>1. </span>Projects</Nav.Link>
          <Nav.Link href="#resume-section"><span id='nav-num'>2. </span>Resume</Nav.Link>
          <Nav.Link href="#contact-section"><span id='nav-num'>3. </span>Contact</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
}

export default ResponsiveNavbar;  
