import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {

            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message

        }
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2>You are about to order: {title}</h2>
                <h2>Price: {price} </h2>
                <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-4 mb-6'>
                    <input type="text" name='firstname' placeholder="First Name" className="input input-bordered w-full " />
                    <input type="text" name='lastname' placeholder="Last Name" className="input input-bordered w-full " />
                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full " />
                    <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} readonly className="input input-bordered w-full " />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>

        </div>
    );
};

export default Checkout;