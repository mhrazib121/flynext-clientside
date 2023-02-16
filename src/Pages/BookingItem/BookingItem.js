import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingItem = (props) => {
    const { _id, name, email, phone, address, status, payableCost } = props?.booking;
    const { id, img, serviceName, fee } = props?.booking?.bookingPackage;
    return (
        <div className="container">
            {/* <td>{id}</td>
            <td>{serviceName}</td>
            <td>{fee}</td>
            <td><button>Cancel</button></td> */}



            <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-color fw-bold">{serviceName}</Card.Title>
                        <div>
                            <h6>Name: {name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>Contact: {phone}</h6>
                            <h6>Status: {status} </h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => props.cancelBooking(_id)} type="button" className="btn">Cancel</button>
                            <h4> Price: <span className="text-success">${payableCost}</span></h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default BookingItem;