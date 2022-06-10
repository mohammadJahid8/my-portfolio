import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import image1 from '../iamges/candle/Screenshot_1.png';
import image2 from '../iamges/candle/Screenshot_2.png';
import image3 from '../iamges/candle/Screenshot_3.png';
import { useParams } from "react-router-dom";
import useDetail from './useDetail';

const ProjectDetail = () => {
    const [detail] = useDetail();
    // console.log(detail);
    const { name, description, detailImage1, detailImage2, homeImage, live, client, server, technology } = detail;


    return (
        <>
            <Navbar backgroundHome="bg-white" />
            <div>
                <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                    <div className="lg:flex items-center justify-between">

                        <div className="lg:w-7/12 lg:mt-0 mt-8">
                            <div className="w-full h-full bg-red-200">
                                <img src={homeImage} alt="apartment design" className="w-full sm:block hidden" />
                                <img src={homeImage} alt="apartment design" className="sm:hidden block w-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                                <img src={detailImage1} className="w-full" alt="kitchen" />
                                <img src={detailImage2} className="w-full" alt="sitting room" />
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <h1 className="text-4xl font-semibold leading-9 text-gray-800">{name}</h1>
                            <p className="text-base leading-6 my-4 text-gray-600">{description}</p>
                            <p><span className="text-lg font-bold">Technology Used:</span> {technology}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;