import React from 'react';
import Navbar from './Navbar';
import image1 from '../iamges/candle/Screenshot_1.png';
import image2 from '../iamges/candle/Screenshot_2.png';
import image3 from '../iamges/candle/Screenshot_3.png';


const ProjectDetail = () => {
    return (
        <>
            <Navbar backgroundHome="bg-white" />
            <div>
                <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:w-1/3">
                            <h1 className="text-4xl font-semibold leading-9 text-gray-800">Indoor Interiors</h1>
                            <p className="text-base leading-6 mt-4 text-gray-600">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
                            <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                                View Catalogue
                                <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="lg:w-7/12 lg:mt-0 mt-8">
                            <div className="w-full h-full bg-red-200">
                                <img src={image1} alt="apartment design" className="w-full sm:block hidden" />
                                <img src={image1} alt="apartment design" className="sm:hidden block w-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                                <img src={image2} className="w-full" alt="kitchen" />
                                <img src={image3} className="w-full" alt="sitting room" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;