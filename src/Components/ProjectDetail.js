import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import useDetail from './useDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const ProjectDetail = () => {
    const [detail] = useDetail();
    // console.log(detail);
    const { name, description, detailImage1, detailImage2, homeImage, live, client, server, technology } = detail;

    let navigate = useNavigate(); //for back button

    return (
        <>
            <Navbar backgroundHome="bg-white" />
            <div>

                <button
                    onClick={() => navigate(-1)}
                    className="flex flex-row items-center text-gray-600 hover:text-blue-500 space-x-1 ml-4 mt-6  md:ml-10 lg:ml-20"
                >
                    <svg
                        className="fill-stroke"
                        width="28"
                        height="28"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.91681 7H11.0835"
                            stroke="currentColor"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.91681 7L5.25014 9.33333"
                            stroke="currentColor"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.91681 7.00002L5.25014 4.66669"
                            stroke="currentColor"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="text-lg leading-none">Back</p>
                </button>
                <h2 class="text-gray-600 text-center text-4xl font-bold hover:text-gray-500 my-6">Project Detail</h2>

                <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 mb-12">
                    <div className="lg:flex items-center justify-between">

                        <div className="lg:w-7/12 lg:mt-0 mt-8">
                            <div className="w-full h-full bg-red-200">
                                <img src={homeImage} alt="apartment design" className="w-full sm:block hidden" />
                                <img src={homeImage} alt="apartment design" className="sm:hidden block w-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                                <img src={detailImage1} className="w-full" alt="" />
                                <img src={detailImage2} className="w-full" alt="" />
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <h1 className="text-4xl font-semibold leading-9 text-gray-800">{name}</h1>
                            <p className="text-base leading-6 my-4 text-gray-600">{description}</p>
                            <p className='mb-3'><span className="text-lg font-bold">Technology Used:</span> {technology}</p>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={live}>Live Site
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
                            </a>
                            <a
                                target="_blank" rel="noopener noreferrer"
                                className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={client}>

                                Client</a>
                            {server && <a
                                target="_blank" rel="noopener noreferrer"
                                className="text-blue-600 text-lg hover:text-blue-400 pr-4" href={server}>Server
                            </a>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;