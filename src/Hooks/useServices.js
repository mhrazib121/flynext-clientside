import React from 'react';
import { useState, useEffect } from 'react'

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://flynext-serverside.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return { services };
};

export default useServices;