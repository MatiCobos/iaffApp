import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/Header.css';


const Header = () => {
  return (
    <Navbar className="customNavbar" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/IAF-2.png"
            width="55"
            height="34"
            className="d-inline-block align-text-top"
          />{' '}
          Instituto Medico Alexander Fleming
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;