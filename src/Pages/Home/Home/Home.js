import React from 'react';
import { Card, CardGroup, } from 'react-bootstrap';
import Services from '../../Services/Services';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faHistory, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import BookingSearch from '../../BookingSearch/BookingSearch';
import useServices from '../../../Hooks/useServices';

const Home = () => {
    const { isServiceLoading } = useServices();
    const clock = <FontAwesomeIcon icon={faHistory} />
    const money = <FontAwesomeIcon icon={faSearchDollar} />
    const safety = <FontAwesomeIcon icon={faAmbulance} />

    if (isServiceLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='banner mb-3' >
                <div className='p-5 bg '>
                    <div data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-sine">
                        <h1 className='p-3'> Best Worldwide <br /> <span className='tittle-color'>Travel Agency</span></h1>
                        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis itaque dicta, perferendis <br /> neque dolores ab cum magnam reprehenderit fugit eligendi voluptatibus doloremque blanditiis, facere rerum.</p>
                    </div>
                    <button data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-sine" className='m-3 btn-design'> Explore Now</button>
                </div>

            </div>

            <BookingSearch />

            {/* Service Section  */}
            <Services />

            {/* Feature Section  */}
            <div className='container'>
                <div className='text-center my-5'>
                    <h3> Our Core Feature</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur  adipisicing elit. Necessitatibus <br /> nihil ducimus, magni minima adipisci aperiam. Consectetur, rerum eligendi! Neque, hic.</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-sine">
                    <CardGroup className='gap-4'>
                        <Card>
                            <span className='font-icon'>{clock}</span>
                            <Card.Body>
                                <Card.Title>Time Concern</Card.Title>
                                <Card.Text>
                                    On time flight, We will concern about your valuable time. We will try provide you best service.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>

                            <span className='font-icon'>{money}</span>
                            <Card.Body>
                                <Card.Title>Money Back Guarantee</Card.Title>
                                <Card.Text>
                                    It’s automatic and covers your purchase price plus original shipping on eligible purchases*
                                    and there’s no extra fee for coverage.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>

                            <span className='font-icon'>{safety}</span>
                            <Card.Body>
                                <Card.Title>Safety Security</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates perferendis modi consequuntur pariatur? Lorem ipsum dolor sit amet consectetur adipisicing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Home;