import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user.email)
    return (
        <Navbar collapseOnSelect expand="lg" className='header-de w-100'>
            <Container>
                <img src={logo} alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className='mx-3 link-design' to="/home">Home</Link>
                        <Link className='mx-3 link-design' to="/services">Services</Link>
                        <Link className='mx-3 link-design' to="/services">Blog</Link>
                        <Link className='mx-3 link-design' to="/about">About Us</Link>
                    </Nav>
                    <Nav>
                        {
                            user.email ?
                                <>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.displayName}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <Link className="dropdown-item" to="/mybooking">My Booking</Link>
                                            <Link className="dropdown-item" to="/managebooking">Manage Booking</Link>
                                            <Link className='dropdown-item ' to="/addnewservice">Add Service</Link>


                                        </ul>
                                    </div>
                                    <button onClick={logOut} className='btn-all mx-2' > Logout </button>
                                    
                                </>
                                :
                                
                                <button className='btn-all' > <Link to='/login'> Login </Link> </button>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;