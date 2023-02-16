import React from 'react';
import { useState, useEffect } from 'react'

const useServices = () => {
    const [services, setServices] = useState([]);
    const [isServiceLoading, setIsServiceLoading] = useState(false);
    useEffect(() => {
        setIsServiceLoading(true)
        fetch('https://flynext-serverside.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsServiceLoading(false)
            })
    }, [])
    return [services, isServiceLoading];
};

export default useServices;