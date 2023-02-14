import React from 'react';
import './SupportCard.css'
const SupportCard = () => {
    return (
        <div className='card-support my-6 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        grid h-screen place-items-center'>
            <div>
                <div className=''>
                    <p>We are open monday-friday</p>
                    <h3 className="text-3xl">7 am to 9 pm</h3>
                </div>
            </div>
            <div>
                <div className=' '>
                    <p>Have a question?</p>
                    <h3 className="text-3xl">+2546 45945 438</h3>
                </div>
            </div>
            <div>
                <div className=' '>
                    <p>Need a repair? Our Address</p>
                    <h3 className="text-3xl">Liza Street, NY </h3>
                </div>
            </div>
        </div>
    );
};

export default SupportCard;