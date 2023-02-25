import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices]= useState();
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className='py-10'>
            <div className='text-center pb-6'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h1 className="text-5xl font-semibold">Our Service Area</h1>
                <p className='font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
               
                {
                    services?.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <div className="py-6 flex justify-center">
                <button className="btn btn-outline btn-error ">More Services</button>
            </div>
        </div>
    );
};

export default Services;