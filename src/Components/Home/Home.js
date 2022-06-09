import React from 'react';
import Banner from '../Banner';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#030406] text-white" />
            <Banner />
        </div>
    );
};

export default Home;