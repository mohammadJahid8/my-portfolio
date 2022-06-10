import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import useDetail from './useDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
    const [detail] = useDetail();
    // console.log(detail);
    const { name, description, detailImage1, detailImage2, homeImage, live, client, server, technology } = detail;


    return (
        <>
            <Navbar backgroundHome="bg-white" />
            <div>
                <h2 class="text-gray-600 text-center text-4xl font-bold hover:text-gray-500 my-6">Project Detail</h2>

                <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 mb-12">
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
                            <p className='mb-3'><span className="text-lg font-bold">Technology Used:</span> {technology}</p>
                            <a className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={live}>Client
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
                            </a>
                            <a className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={live}>

                                Live Site</a>
                            <a className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={live}>Server

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;