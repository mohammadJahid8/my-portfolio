import React from 'react';
import About from '../About';
import Banner from '../Banner';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Projects from '../Projects';

const Home = () => {
    return (
        <div>
            <Navbar backgroundHome="bg-[#030406] text-white" />
            <Banner />
                <About />
            <div className='bg-gray-50'>
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Home;