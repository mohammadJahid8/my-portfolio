import React from 'react';
import Navbar from './Navbar';
import './Blogs.scss';

const Blogs = () => {
    return (
        <>
            <Navbar backgroundHome="bg-white" />
            <div className='bg-gray-100 w-full py-60'>
                <div class="container">
                    <div class="coast">
                        <div class="wave-rel-wrap">
                            <div class="wave"></div>
                        </div>
                    </div>
                    <div class="coast delay">
                        <div class="wave-rel-wrap">
                            <div class="wave delay"></div>
                        </div>
                    </div>
                    <div class="text text-w">w</div>
                    <div class="text text-a">a</div>
                    <div class="text text-v">v</div>
                    <div class="text text-e">e</div>
                </div>
            </div>
        </>
    );
};

export default Blogs;