import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand href="#home">
        <Image src="vite.svg" alt="Logo" width="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
          <Nav.Link href="#mentor">Mentorship</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button variant="outline-primary" href="#contact">Say Hello</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;