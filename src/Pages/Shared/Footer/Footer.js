import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='m- p-5  footer '>
            <div className='d-lg-flex p-3 m- border-style'>
            <div className=' my-4 p-3 me-auto ms-auto'>
                <h6>Get Started</h6>
                <li>Book Now </li>
                <li>Register</li>
                <li>Journey History</li>
                <li>Flynext Mobile App</li>
            </div >
            <div className=' my-4 p-3 me-auto ms-auto'>
                <h6> Address </h6>
                <p>
                Europe 45 Gloucester Road <br />
                London DT1M 3BF <br />
                +44 (0)20 3671 0000
                </p>
            </div>
            <div className=' my-4 p-3 me-auto ms-auto'>
                <h6>About Us</h6>
                <li>About us</li>
                <li>News & Press</li>
                <li>Blog</li>
                <li>FAQs</li>
            </div>
            <div className='my-4 p-3 me-auto ms-auto'>
                <h6>Newsletter</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, sit!</p>
                <input type="email" />
                <button>Subscribe Us</button>
            </div>
            </div>
        </div>
    );
};

export default Footer;