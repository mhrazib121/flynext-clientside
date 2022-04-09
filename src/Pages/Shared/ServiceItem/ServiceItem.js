import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ServiceItem.css"

const ServiceItem = (props) => {
    const { _id, img, fee, serviceName, description} = props.service;
    // console.log(img)
    // console.log(_id)
    return (
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
            <Col >
                <Card className="card-design">
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title className="text-color text-center">{serviceName}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <div className='d-lg-flex align-items-center'>
                        <button className='btn-all'> <Link className='link-d' to={`/placeorder/${_id}`}>Booking Now</Link> </button>
                        <p className='fs-3 mt-2 text-color ms-auto'> $ {fee}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceItem;