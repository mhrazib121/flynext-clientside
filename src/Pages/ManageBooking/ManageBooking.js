import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageBookingItems from '../ManageBookingItems/ManageBookingItems';

const ManageBooking = () => {
    const [bookings, setBookings] =useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/bookings")
        .then(res=>res.json())
        .then(data => setBookings(data))
    },[bookings])
    return (
        <div>
            <h1 className="text-center my-3"> Manage All Booking </h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    bookings.map(booking => <ManageBookingItems key={booking?._id} booking={booking} > </ManageBookingItems>
                    )
                }
            </Row>
        </div>
    );
};

export default ManageBooking;