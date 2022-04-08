import React from 'react';

const ManageBookingItems = (props) => {
    const {_id,orderDate, firstName, email, phone, departure, destination,totalPerson,payableCost, status} = props?.booking;
    const { img, serviceName } = props?.booking?.bookingPackage;
    return (
        <tr className= "text-center fw-light">
            <td className='p-2 border text-wrap'>{orderDate}</td>
            <td className='p-2 border'>{firstName}</td>
            <td className='p-2 border'>{serviceName}</td>
            <td className='p-2 border'>{email}</td>
            <td className='p-2 border'>{phone}</td>
            <td className='p-2 border'>{departure}</td>
            <td className='p-2 border'>{destination}</td>
            <td className='p-2 border'>{totalPerson}</td>
            <td className='p-2 border'>{payableCost}</td>
            <td className='p-2 border'>{status}</td>
            <td className='p-2 border'><button onClick={() => props.updateBooking(_id)} type="button" className="btn btn-success">Update</button></td>
            <td className='p-2 border'><button onClick={() => props.cancelBooking(_id)} type="button" className="btn btn-danger">Cancel</button></td>
        </tr>
    );
};

export default ManageBookingItems;