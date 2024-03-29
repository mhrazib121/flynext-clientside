import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css'
import banner from '../../Images/add-service-banner.jpg'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://flynext-serverside.vercel.app/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added new service successfully');
                    reset();
                }
            })
    }
    return (
        <div className=' box-design  add-banner'>
            {/* <img className='banne' src={banner} alt="" /> */}

            <div className=' bg-t  p-5 mx-auto'>
                <div className='mt-5 text-center mx-auto'>
                    <div className='d-from'>
                        <h2 className='tittle'>Add New Fetured Service: </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("serviceName")} placeholder=" Enter Your Service Name" /> <br />
                            <input type='text' {...register("description")} placeholder="Enter Description" /> <br />
                            <input type='text' {...register("img")} placeholder="Image" /> <br />
                            <input type='number' {...register("fee")} placeholder="Price" /> <br />
                            <input className='btn btn-primary mt-4' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewService;