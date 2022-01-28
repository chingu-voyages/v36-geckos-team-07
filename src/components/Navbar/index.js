import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './../../images/logo.png';
// import { Link } from 'react-router-dom';
// import  '../styles/Navbar.css';

function NavBar() {
  return <>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/home">
  <img 
          alt="Logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        NFT App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    <Nav className="ms-auto">
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/education">Education</Nav.Link>
      <Nav.Link href="/trendingnfts">Trending NFTs</Nav.Link>
      <Nav.Link eventKey={4} href="/about">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </>;
}

export default NavBar;
