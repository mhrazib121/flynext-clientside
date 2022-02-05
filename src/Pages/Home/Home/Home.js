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

const Home = () => {
    const clock = <FontAwesomeIcon icon={faHistory} />
    const money = <FontAwesomeIcon icon={faSearchDollar}/>
    const safety =  <FontAwesomeIcon icon={faAmbulance}/>

    const {myName} = useAuth();
    console.log(myName)
    
    return (
        <div>
            <div className='banner mb-3' >
                <div className='p-5 bg w-50'>
                    <h1 className='p-3'> Best Worldwide Travel Agency</h1>
                    <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis itaque dicta, perferendis neque dolores ab cum magnam reprehenderit fugit eligendi voluptatibus doloremque blanditiis, facere rerum.</p>
                    <button className='mt-3'> Explore Now</button>
                </div>
                <div className='w-50'>
                    {/* <img src={banner} alt="" /> */}
                </div>
            </div>
            <Services />
            <div>
                <div>
                    <h3> Our Core Feature</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nihil ducimus, magni minima adipisci aperiam. Consectetur, rerum eligendi! Neque, hic.</p>
                </div>
                <div>
                    <CardGroup>
                        <Card>
                            <span className='font-icon'>{clock}</span>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            
                            <span className='font-icon'>{money}</span>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            
                            <span className='font-icon'>{safety}</span>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default Home;