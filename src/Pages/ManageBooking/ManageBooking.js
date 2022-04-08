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
            <h1 className="text-center my-3 tittle-color"> Manage All Booking </h1>
            <table className='container mb-5'>
            <thead>
                    <tr className='bg-primary text-light text-center fs-6 fw-bold'>
                        <td className='border p-2'>Order Date</td>
                        <td className='border p-2'>Customer Name</td>
                        <td className='border p-2'>Package Name</td>
                        <td className='border p-2'>Email</td>
                        <td className='border p-2'>Phone</td>
                        <td className='border p-2'>Departure</td>
                        <td className='border p-2'>Destination</td>
                        <td className='border p-2'>Pass. Number</td>
                        <td className='border p-2'>Fee</td>
                        <td className='border p-2'>Delivery Status</td>
                        <td className='border p-2'>Update Delivery</td>
                        <td className='border p-2'>Order Cancel</td>
                    </tr>
                </thead>
                <tbody>
                {
                    bookings.map(booking => <ManageBookingItems key={booking?._id} booking={booking} cancelBooking={cancelBooking} updateBooking={updateBooking} > </ManageBookingItems>
                    )
                }
                </tbody>
            </table>
            {/* <Row className="g-3 m-3" xs={1} md={3} >
                
            </Row> */}
        </div>
    );
};

export default ManageBooking;