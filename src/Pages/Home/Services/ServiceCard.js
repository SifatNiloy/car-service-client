import React from 'react';
import arrow from '../../../assets/icons/next.png'
const ServiceCard = ({service}) => {
    const {title, img, price, description}= service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex'>
                    <p className='text-red-600 font-semibold text-xl'>Price : ${price}</p>
                    <img style={{ width: "20px", backgroundColor:"red" }} src={arrow} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default ServiceCard;