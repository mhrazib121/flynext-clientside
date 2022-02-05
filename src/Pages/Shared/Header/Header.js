import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">{logo}</Navbar.Brand> */}
                <img src={logo} alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='mx-3' to="/home">Home</Link>
                        <Link className='mx-3' to="/services">Services</Link>
                        <Link className='mx-3' to="/services">Blog</Link>
                        <Link className='mx-3' to="/about">About Us</Link>
                    </Nav>
                    <Nav>
                        
                        <button > <Link to='/login'> Login </Link> </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;