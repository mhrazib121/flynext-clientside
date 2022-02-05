import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { services } = useServices();
    const { id } = useParams();
  

    const serviceData = services.find(service => service._id === id)
    console.log(serviceData);
    const onSubmit = data => {
        data.bookingPackage = serviceData;
        data.status = 'Pending';
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Placing order successfully');
                    reset();
                    // history.push('/mybooking');
                }
            })
    }

 

    
    return (
        <div className='container row mx-auto my-5 pt-5 pb-5'>
            <section className="col-lg-6 my-4  ">
                <h3 > Package Name: {serviceData?.serviceName}  </h3>
                <img className="w-50 my-3" src={serviceData?.img} alt="" />
                <p > Details: {serviceData?.description} </p>
                <h4 > Package Price: $ {serviceData?.fee} </h4>
            </section>
            <section className='col-lg-6  my-4 mx-auto form-design text-center'>
                <h3> Provide Your Information:</h3>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} /> <br />
                    <input type='email' {...register("email")} /> <br />
                    <input type='date' {...register("orderDate")} /> <br />
                    <input type='number' {...register("phone")} /> <br />
                    <input type='address' {...register("address")} /> <br />
                    <input type="submit" to ="/mybooking" />
                </form>
            </section>
        </div>
    );
};

export default PlaceOrder;