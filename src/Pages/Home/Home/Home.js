import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SupportCard from '../SupportCard/SupportCard';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <SupportCard/>
        </div>
    );
};

export default Home;
