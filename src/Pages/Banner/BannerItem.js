import React from 'react';

const BannerItem = ({image}) => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-full" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className="text-6xl font-bold text-white" >
                    Affordable <br />
                    Price For Car<br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className="text-white" >
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <p className="text-xl font-bold text-white" >
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn mr-5 btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;