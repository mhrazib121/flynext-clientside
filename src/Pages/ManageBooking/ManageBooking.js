import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageBookingItems from '../ManageBookingItems/ManageBookingItems';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("https://polar-mesa-20065.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const updateBooking = id => {
        const procced = window.confirm('Do you want to update booking status?');
        if (procced) {
            const url = `https://polar-mesa-20065.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successfully');
                    }
                })
        }
    }

    const cancelBooking = id => {
        const procced = window.confirm('Are you want to cancel booking?')
        if (procced) {
            const url = `https://polar-mesa-20065.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your booking canceled sucessfully');
                        const remainingBookings = bookings.filter(booking => booking?._id !== id);
                        setBookings(remainingBookings);
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-center my-3"> Manage All Booking </h1>
            <Row className="g-3 m-3" xs={1} md={3} >
                {
                    bookings.map(booking => <ManageBookingItems key={booking?._id} booking={booking} cancelBooking={cancelBooking} updateBooking={updateBooking} > </ManageBookingItems>
                    )
                }
            </Row>
        </div>
    );
};

export default ManageBooking;