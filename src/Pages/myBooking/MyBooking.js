import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'
import BookingItem from '../BookingItem/BookingItem';

const MyBooking = () => {
    const {user} = useAuth();
    const [bookings, setBookings] =useState([]);
    console.log(user.email);


    useEffect(()=>{
        fetch("http://localhost:5000/bookings")
        .then(res=>res.json())
        .then(data => {
            const myBookings = data.filter(booking => booking.email===user.email);
            setBookings(myBookings);
        })
    },[user.email])
    
    return (
        <div>

            <Row xs={1} md={2} className="g-4">
                {
                    bookings.map(booking => <BookingItem key={booking?._id} booking={booking} />)
                }
            </Row>
        </div>
    );
};

export default MyBooking;