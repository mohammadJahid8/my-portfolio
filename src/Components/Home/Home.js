import React from 'react';
import About from '../About';
import Banner from '../Banner';
import Navbar from '../Navbar';
import Projects from '../Projects';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#030406] text-white" />
            <Banner />
            <div className=' '>
                <About />
                <Projects />

            </div>
        </div>
    );
};

export default Home;