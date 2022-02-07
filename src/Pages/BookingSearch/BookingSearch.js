import React from 'react';
import { useForm } from 'react-hook-form';
import './BookingSearch.css'

const BookingSearch = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = () => {

    }
    return (
        <div className='container margin-all'>
            
            <form className='full-from' onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </div>
    );
};

export default BookingSearch;