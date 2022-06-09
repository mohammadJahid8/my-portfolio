import React from 'react';
import project1 from '../iamges/project1.png'
import project2 from '../iamges/project2.png'
import project3 from '../iamges/project3.png'
import project4 from '../iamges/project4.png'
import project5 from '../iamges/project5.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Projects = () => {
    return (
        <div>
            <section className="bg-gray-50 ">
                <p className='text-gray-600 tracking-[.2rem] uppercase text-base pb-2 pt-20 text-center'>Works </p>
                <h2 className='text-gray-700 text-4xl text-center  font-bold'>Latest Projects</h2>
                <p className='text-gray-700 text-xl text-center mb-4'>Some of the projects I have completed recently</p>
                <div className="px-4 py-12  lg:pt-16 lg:pb-24 lg:px-16 md:px-12">
                    <div className=" mx-auto">
                        <div className="grid  gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-48" src={project1} alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-neutral-600">Ventrac</p>
                                        <p className="mt-3 text-base text-gray-500">It is a Full-stack Tools Manufacturer Site.
                                            Users can order products, see their own orders, and delete any order. They can confirm the order by payment method which is implemented by Stripe.
                                        </p>
                                        <a href="https://twitter.com/g_perales" className="block mt-2 text-blue-600">
                                            More Details
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-2  " />
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        <a href='https://assignment-12-9e0cc.web.app/' target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                        <a href='https://github.com/mohammadJahid8/ventrac-manufacturer' target="_blank" rel="noopener noreferrer" className="btn mr-4">client</a>
                                        <a href='https://github.com/mohammadJahid8/ventrac-manufac-server' target="_blank" rel="noopener noreferrer" className="btn">server</a>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-48" src={project4} alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-neutral-600">Best Electronics</p>
                                        <p className="mt-3 text-base text-gray-500">is a Full-stack Store Warehouse Site.This site displays some products which can be updated by an Admin. Sellers can add products and see their own products in different routes as well.Applied authentication and created  Mobile  Responsive  User  Experience
                                        </p>
                                        <a href="https://twitter.com/g_perales" className="block mt-2 text-blue-600">
                                            More Details
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-2  " />
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        <a href='https://assignment-11-85553.web.app/' target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                        <a href='https://github.com/mohammadJahid8/best-electronics' target="_blank" rel="noopener noreferrer" className="btn mr-4">client</a>
                                        <a href='https://github.com/mohammadJahid8/best-electronics-server' target="_blank" rel="noopener noreferrer" className="btn">server</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink">
                                    <img className="object-cover w-full h-48" src={project3} alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-neutral-600">Peters Photography</p>
                                        <p className="mt-3 text-base text-gray-500">is a Personal Photography Site. This site represents a photographer and his services.Users need to Sign/Signup to Checkout any services.	Created mobile  Responsive  User  Experience</p>
                                        <a href="https://twitter.com/g_perales" className="block mt-2 text-blue-600">
                                            More Details
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-2  " />
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        <a href='https://assignment-10-5eb12.web.app/' target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                        <a href='https://github.com/mohammadJahid8/peters-photography' target="_blank" rel="noopener noreferrer" className="btn mr-4">Client</a>
                                        <a href='https://github.com/mohammadJahid8/peters-photography' target="_blank" rel="noopener noreferrer" className="btn">Server</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-48" src={project5} alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <p className="text-xl font-semibold text-neutral-600">Ventrac</p>
                                        <p className="mt-3 text-base text-gray-500">It is a Full-stack Tools Manufacturer Site.
                                            Users can order products, see their own orders, and delete any order. They can confirm the order by payment method which is implemented by Stripe.
                                        </p>
                                        <a href="https://twitter.com/g_perales" className="block mt-2 text-blue-600">
                                            More Details
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-2  " />
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        <a href='https://xenodochial-haibt-4a1234.netlify.app/' target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                        <a href='https://github.com/mohammadJahid8/convention-center' target="_blank" rel="noopener noreferrer" className="btn mr-4">client</a>
                                        <a href='https://github.com/mohammadJahid8/convention-center' target="_blank" rel="noopener noreferrer" className="btn">server</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-48" src={project2} alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">

                                        <p className="text-xl font-semibold text-neutral-600">Classic Candles</p>
                                        <p className="mt-3 text-base text-gray-500">Classic Candle is a candle review site. All the reviews of the customer will display in the home page</p>

                                        <a href="https://twitter.com/g_perales" className="block mt-2 text-blue-600">
                                            More Details
                                            <FontAwesomeIcon icon={faArrowRight} className="pl-2  " />
                                        </a>
                                    </div>
                                    <div className="flex justify-center items-center mt-6">
                                        <a href="https://flourishing-creponne-d381f1.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                        <a href="https://github.com/mohammadJahid8/product-analysis-site" target="_blank" rel="noopener noreferrer" className="btn mr-4">Client</a>
                                        <a href="https://github.com/mohammadJahid8/product-analysis-site" target="_blank" rel="noopener noreferrer" className="btn">Server</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Projects;