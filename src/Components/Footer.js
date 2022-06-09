import React from 'react';
import { faGithub, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-900 text-slate-50 px-4 py-10">
                <div className="flex flex-col items-center justify-center">
                

                    <div className="flex items-center gap-x-8 mt-6">
                        <div className="cursor-pointer">

                            <FontAwesomeIcon icon={faFacebook} className="fill-current text-gray-300 hover:text-gray-500  h-7" />
                        </div>
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faInstagram} className="fill-current text-gray-300 hover:text-gray-500  h-7" />
                        </div>
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faLinkedin} className="fill-current text-gray-300 hover:text-gray-500  h-7" />
                        </div>
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faGithub} className="fill-current text-gray-300 hover:text-gray-500  h-7" />
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <p className="text-base leading-4 text-gray-300">
                            2022 <span className="font-semibold">Mohamad Jahid</span>
                        </p>
                        <div className="border-l border-gray-800 pl-2 ml-2">
                            <p className="text-base leading-4 text-gray-300">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;