import React from 'react';
import html from '../../src/iamges/logos/html.png';
import css3 from '../../src/iamges/logos/css3.png';
import javascript from '../../src/iamges/logos/javascript.png';
import bootstrap from '../../src/iamges/logos/bootstrap.png';
import tailwind from '../../src/iamges/logos/tailwind.png';
import react from '../../src/iamges/logos/react.png';
import node from '../../src/iamges/logos/node.png';
import mongodb from '../../src/iamges/logos/mongodb.png';
import firebase from '../../src/iamges/logos/firebase.png';
import github from '../../src/iamges/logos/github.png';
import vs from '../../src/iamges/logos/vs.png';
import npm from '../../src/iamges/logos/npm.png';
import netlify from '../../src/iamges/logos/netlify.png';
import figma from '../../src/iamges/logos/figma.png';
import postman from '../../src/iamges/logos/postman.png';
import heroku from '../../src/iamges/logos/heroku.png';
import Navbar from './Navbar';

const About = () => {
    return (
        <>

            <div id="about" >
                <section class="mb-20 text-gray-600 body-font md:px-12">
                    <p className='text-gray-600 tracking-[.2rem] uppercase text-base pb-2 pt-20 text-center'>About </p>
                    <h2 className='text-gray-700 text-4xl text-center  font-bold'>Personal Information</h2>
                    <p className='text-gray-700 text-xl text-center mb-4'>Get to know more about me</p>
                    <div class="container flex flex-wrap px-5 py-2 mx-auto items-center">
                        <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 pb-10 border-b border-gray-200">
                            <h1 class="sm:text-xl text-xl font-medium title-font mb-2 text-gray-900">Hello!</h1>
                            <h2 class="leading-relaxed text-base" >My name is Mohammad Jahid and I'm a passionate Front End Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
                                <br />
                                I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me
                            </h2>
                            <a class="text-indigo-500 inline-flex items-center mt-4">Know More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="md:w-1/2 md:pl-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900 text-center ">My Skills</h1>
                            <div className='flex justify-center'>
                                <div className='md:px-0 px'>
                                    <div className='flex gap-14 lg:gap-20 '>
                                        <img className='w-10 transition duration-500 hover:scale-105' src={html} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={css3} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={bootstrap} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={tailwind} alt="" />
                                    </div>
                                    <div className='flex gap-14 lg:gap-20 mt-4'>
                                        <img className='w-10 transition duration-500 hover:scale-105' src={javascript} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={react} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={node} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={mongodb} alt="" />
                                    </div>
                                    <div className='flex gap-14 lg:gap-20 mt-6'>
                                        <img className='w-10 transition duration-500 hover:scale-105' src={firebase} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={heroku} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={github} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={netlify} alt="" />
                                    </div>
                                    <div className='flex gap-14 lg:gap-20 mt-6'>
                                        <img className='w-10 transition duration-500 hover:scale-105' src={figma} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={postman} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={vs} alt="" />
                                        <img className='w-10 transition duration-500 hover:scale-105' src={npm} alt="" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section >
            </div >
        </>
    );
};

export default About;