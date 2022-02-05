import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png'

const Header = () => {
    const {user} = useAuth();
    console.log(user.email)
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
                        <Link className='mx-3' to="/mybooking">My Booking</Link>
                        <Link className='mx-3' to="/managebooking">Manage Booking</Link>
                        <Link className='mx-3' to="/services">Blog</Link>
                        <Link className='mx-3' to="/about">About Us</Link>
                    </Nav>
                    <Nav>
                        <h5 className='text-light'>Email: {user.email}</h5>
                        <button > <Link to='/login'> Login </Link> </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;