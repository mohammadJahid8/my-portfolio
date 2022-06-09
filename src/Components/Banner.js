import React from 'react';
import banner from '../iamges/banner.png'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import bannerMobile from '../../images/home/mobile/image-header.jpg'

const Banner = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${banner})` }}
                className="h-full bg-no-repeat bg-cover bg-center">
                <div className="">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 lg:py-52">
                        <div className="flex items-center justify-center">
                            <div className="w-max mb-12 xl:mb-0 xl:pr-16 ">
                                <p className='text-gray-400 tracking-[.2rem] uppercase text-base pb-2'>Hello there</p>
                                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-wide text-white sm:leading-none uppercase ">
                                    I am Mohammad Jahid
                                </h2>
                                <h2 className="max-w-lg mb-6 font-sans text-4xl inline tracking-wide text-white">
                                    I am a Front-End Web Developer
                                </h2>
                                <br />
                                <button
                                    className="btn btn-outline rounded-none border-slate-50 text-white mt-6"
                                >
                                    Download Resume
                                    <FontAwesomeIcon icon={faDownload} className="pl-2"/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;