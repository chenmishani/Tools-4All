import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavBar.css';
import logo from './photos/logo.png';

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container className="custom-container">
        <Link to="home" smooth={true} duration={500} className="scroll-link">
          <Navbar.Brand>
            <img src={logo} alt="tools" style={{ width: "100px",height:"50px", marginRight: "50px" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="home" className="nav-link scroll-link" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="video" className="nav-link scroll-link" smooth={false} duration={200}>
              Video
            </Link>
            <Link to="rainbow" className="nav-link scroll-link" smooth={false} duration={500}>
              Tools
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
