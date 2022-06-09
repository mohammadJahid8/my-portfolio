import React from 'react';
import About from '../About';
import Banner from '../Banner';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#030406] text-white" />
            <Banner />
            <About />
        </div>
    );
};

export default Home;