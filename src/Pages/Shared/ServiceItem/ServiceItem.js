import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = (props) => {
    // console.log()
    const { _id, img, serviceName} = props.service;
    console.log(img)
    console.log(_id)
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <button> <Link to={`/placeorder/${_id}`}>Booking Now</Link> </button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceItem;