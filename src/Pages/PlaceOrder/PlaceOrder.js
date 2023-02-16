import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import { useLocation } from 'react-router-dom';
import './PlaceOrder.css'
import useAuth from '../../Hooks/useAuth';
const PlaceOrder = () => {
    const { user } = useAuth();
    const [totalCost, setTotalCost] = useState(0);
    const [person, setPerson] = useState(0);
    const [serviceCharge, setServiceCharge] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    const [services] = useServices();
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    // Redirect url 
    const redirect_url = location?.state?.form || '/mybooking';

    const serviceData = services.find(service => service._id === id);

    // price calculation Start

    const totalPassenger = (e) => {
        setPerson(e.target.value)
        setServiceCharge(60);
        setInsurance(20);
        const totalPassangerFee = serviceData?.fee * parseInt(e.target.value);
        setTotalCost(totalPassangerFee);
    }

    const tax = (totalCost * 12) / 100;
    const finalCost = (totalCost + serviceCharge + insurance + tax);
    // price calculation End

    //  Information post in database
    const onSubmit = data => {
        data.bookingPackage = serviceData;
        data.status = 'Pending';
        data.payableCost = finalCost;
        data.totalPerson = person

        axios.post('https://flynext-serverside.vercel.app/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    navigate(redirect_url)
                }
            })
    }


    return (
        <div>
            <div className='booking-banner banner-size'>
                <h1 className='text-center text-light text-uppercase fw-bold fontSize'> Booking </h1>
            </div>
            <div className='row gap-5 my-5 px-5 pt-5 pb-5'>

                {/* User Information From  */}
                <section className='col-lg-7 booking-details-bg p-5 my-4 form-design'>
                    <h4 className='text-uppercase fw-bold mb-4'> Your Details :</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-lg-flex'>
                            <input className='me-3' {...register("firstName")} value={user.displayName} /> <br />
                            <input type='email' {...register("email")} value={user.email} /> <br />
                        </div>
                        <div className='d-lg-flex'>
                            <input className='me-3' type='date' {...register("orderDate")} placeholder="Booking Date" required /> <br />
                            <input type='number' {...register("phone")} placeholder="Phone Number" required /> <br />
                        </div>
                        <div className='d-lg-flex'>
                            <input className='me-3' type='address' {...register("departure")} placeholder="Departure" required />
                            <input type='address' {...register("destination")} placeholder="Destination" required /> <br />
                        </div>
                        <input onChange={totalPassenger} type="number" placeholder='Passenger No.' required /> <br />
                        <input type="submit" to="/mybooking" />
                    </form>
                </section>

                {/* Booking Summery  */}
                <section className="col-lg-4 ms-auto my-4  ">

                    <div className='booking-details-bg py-4 px-2'>
                        <div> <h4 className='text-uppercase fw-bold text-center mb-4'>Summary</h4></div>
                        <div className='d-flex px-4'>
                            <h6 className='me-auto'> Package price <span className='fw-light'>(Per Person)</span></h6>
                            <p className='ms-auto'>$ {serviceData?.fee}</p>
                        </div>
                        <div className='d-flex px-4'>
                            <h6 className='me-auto'> No. of people</h6>
                            <p className='ms-auto'>${totalCost} </p>
                        </div>
                        <div className='d-flex px-4'>
                            <h6 className='me-auto'> Service Charge</h6>
                            <p className='ms-auto'> ${serviceCharge}</p>
                        </div>
                        <div className='d-flex px-4'>
                            <h6 className='me-auto'> Insurance</h6>
                            <p className='ms-auto'>${insurance}</p>
                        </div>
                        <div className='d-flex px-4'>
                            <h6 className='me-auto'> Tax</h6>
                            <p className='ms-auto'> {tax}</p>
                        </div>
                        <hr />
                        <div className='d-flex px-4'>
                            <h6 className='me-auto fw-bold'> Total Cost</h6>
                            <p className='ms-auto'> {finalCost}</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PlaceOrder;