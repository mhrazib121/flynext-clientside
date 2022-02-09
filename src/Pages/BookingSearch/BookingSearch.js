import React from 'react';
import { useForm } from 'react-hook-form';
import './BookingSearch.css'

const BookingSearch = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = () => {

    }
    return (
        <div className='container py-5 margin-all'>

            <div className='booking-banner'>
                <h5 className='text-color text-center'> Ready to fly?</h5>
                <h1 className='text-center tittle-color'> Book A Presonal Flight</h1>
                <form className='d-lg-flex m-3' action="">
                    <div className='mx-3 my-2 input-field' placeholder=''>
                        <h6> Departure</h6>
                        <input type="text" />
                    </div>
                    <div className='mx-3 my-2 input-field'>
                        <h6> Destination</h6>
                        <input type="text" />
                    </div>
                    <div className='mx-3 my-2 input-field'>
                        <h6> Journey Date</h6>
                        <input type="date" />
                    </div>
                    <div className='mx-3 my-2 input-field'>
                        <h6> Passenger</h6>
                        <input type="number" />
                    </div>
                </form>
                <div className='d-flex justify-content-center'>
                    <button className='btn-all '> Submit</button>
                </div>
            </div>










            {/* <form className='full-from' onSubmit={handleSubmit(onSubmit)}>
            <h3>Search Your Destination</h3>
                <div className='from-design'>
                    <div className=' input-field  ms-auto me-auto'>
                        <input type="text" {...register("departure")} placeholder=" Departure" /> 
                    </div>
                    <div className='ms-auto me-auto  input-field'>
                        <input type='text' {...register("destination")} placeholder="Destination" /> 
                    </div>
                </div>
                <div>
                    <input className='btn-design mt-2' type="submit" />
                </div>
            </form> */}
        </div>
    );
};

export default BookingSearch;