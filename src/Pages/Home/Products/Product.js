import React from 'react';

const Product = ({product}) => {
    const {name, price, img, start}= product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img style={{width:"200px"}} src={img} alt="Shoes" /></figure>
            <div className="card-body grid place-items-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg text-red-600'>price: {price}</p>
                
            </div>
        </div>
    );
};

export default Product;