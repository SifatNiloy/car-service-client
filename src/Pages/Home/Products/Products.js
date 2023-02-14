import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts]= useState();
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='py-12'>
            <div className='grid place-items-center py-12 '>
                <p className='text-orange-600'>Popular Products</p>
                <h2 className="text-4xl">Browse Our Products</h2>
                <p className='w-25'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid place-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
                {
                    products?.map(product=><Product product={product}></Product> )
                }
            </div>
        </div>
        
    );
};

export default Products;