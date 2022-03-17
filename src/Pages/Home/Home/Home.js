import React from 'react';
import { Card, CardGroup, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Header from '../../Shared/Header/Header';
import banner from '../../../Images/travel41.jpg';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faHistory, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import BookingSearch from '../../BookingSearch/BookingSearch';
import useServices from '../../../Hooks/useServices';
import ServiceItem from '../../Shared/ServiceItem/ServiceItem';
import middBanner1 from '../../../Images/home-image.jpg';
import middBanner2 from '../../../Images/bg-1.png';
import middBanner3 from '../../../Images/single-title-image-1.jpg';

const Home = () => {
    const { services } = useServices()
    const clock = <FontAwesomeIcon icon={faHistory} />
    const money = <FontAwesomeIcon icon={faSearchDollar} />
    const safety = <FontAwesomeIcon icon={faAmbulance} />

    const { myName } = useAuth();
    console.log(myName)

    return (
        <div>
            {/* Top Banner  */}
            <div className='banner mb-3' >
                <div className='p-5 bg '>
                    <div data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-sine">
                        <h1 className='p-3'> Best Worldwide <br /> <span className='tittle-color'>Travel Agency</span></h1>
                        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis itaque dicta, perferendis <br /> neque dolores ab cum magnam reprehenderit fugit eligendi voluptatibus doloremque blanditiis, facere rerum.</p>
                    </div>
                    <button data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-sine" className='mx-3 btn-all'> Explore Now</button>
                </div>

            </div>

            <BookingSearch />
            <br />
            <br />
            {/* Service Section  */}
            <div className='container'>
                <h1 className="text-center tittle-color text-colo my-5 text-uppercase"> Best packages </h1>
                <Row xs={1} md={3} className="g-5">
                    {
                        services.slice(0, 6).map(service => <ServiceItem key={service.id} service={service} />)
                    }
                </Row>
            </div>
            <br />
            <br />

            {/* Middle Banner  */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div interval="1000" className="carousel-item active carousel-bg">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='text-uppercase fw-bold'>Travel anywhere in the country</h1>
                        </div>
                        <img src={middBanner1} className="d-block w-100 carousel-img" alt="..." />
                    </div>
                    <div interval="1000" className="carousel-item carousel-bg" >
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='text-uppercase fw-bold'>Best Team with world class services</h1>
                        </div>
                        <img src={middBanner2} className="d-block w-100 carousel-img" alt="..." />
                    </div>
                    <div interval="1000" className="carousel-item carousel-bg">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='text-uppercase fw-bold'>Best Tour Packages & guide</h1>
                        </div>
                        <img src={middBanner3} className="d-block w-100 carousel-img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Home;