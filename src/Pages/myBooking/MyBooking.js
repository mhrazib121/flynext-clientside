import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'
import BookingItem from '../BookingItem/BookingItem';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    console.log(user.email);


    useEffect(() => {
        fetch("https://polar-mesa-20065.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => {
                const myBookings = data.filter(booking => booking.email === user.email);
                setBookings(myBookings);
            })
    }, [user.email])

    const cancelBooking = id => {
        const procced = window.confirm('Do you want to cancel your booking?');

        if (procced) {
            const url = `https://polar-mesa-20065.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel Succesfully');
                        const remainingBookings = bookings.filter(booking => booking?._id === id);
                        setBookings(remainingBookings);
                    }
                })
        }
    }

    return (
        <div>

            <Row xs={1} md={2} className="g-4">
                {
                    bookings.map(booking => <BookingItem key={booking?._id} cancelBooking={cancelBooking} booking={booking} />)
                }
            </Row>
            {/* <table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Cancel</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingItem key={booking?._id} cancelBooking={cancelBooking} booking={booking} />)
                    }
                    
                </tbody>

            </table> */}

        </div>
    );
};

export default MyBooking;