import React from 'react';

const About = () => {
    return (
        <div>
            <section class="mb-12 text-gray-600 body-font md:px-12">
                <p className='text-gray-600 tracking-[.2rem] uppercase text-base pb-2 pt-20 text-center'>About </p>
                <h2 className='text-gray-700 text-4xl text-center  font-bold'>Personal Information</h2>
                <p className='text-gray-700 text-xl text-center mb-4'>Get to know more about me</p>
                <div class="container flex flex-wrap px-5 py-2 mx-auto items-center">
                    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 pb-10 border-b border-gray-200">
                        <h1 class="sm:text-xl text-xl font-medium title-font mb-2 text-gray-900">Hello!</h1>
                        <h2 class="leading-relaxed text-base">My name is Mohammad Jahid and I'm a passionate Front End Web Developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
                            <br />
                            I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me
                        </h2>
                        <a class="text-indigo-500 inline-flex items-center mt-4">Know More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="flex flex-col md:w-1/2 md:pl-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center mt-10">My Skills</h1>
                        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-2">EXPERTISE</h2>
                        <div class="flex flex-wrap list-none -mb-1">
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">HTML</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">CSS</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Bootstrap 5</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Tailwind Css</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">JavaScript/ES6</h2>
                            <h2 class="mt-2 xl:mt-0 rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">React JS</h2>
                            <h2 class=" xl:mt-0  mt-2 rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Axios</h2>
                            <h2 class="mt-2 rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">React Query</h2>
                        </div>
                        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-2 mt-4">COMFORTABLE</h2>
                        <div class="flex flex-wrap list-none -mb-1">
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Node Js</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Express Js</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">MongoDB</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Stripe</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">JWT</h2>
                        </div>
                        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-2 mt-4">FAMILIAR</h2>
                        <div class="flex flex-wrap list-none -mb-1">
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">React Native</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Next Js</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">TypeScript</h2>
                        </div>
                        <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-2 mt-4">TOOLS</h2>
                        <div class="flex flex-wrap list-none -mb-1">
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">VS Code</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Github</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Netlify</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Firebase</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Heroku</h2>
                            <h2 class="rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">NPM</h2>
                            <h2 class="mt-2 xl:mt-0 rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Figma</h2>
                            <h2 class="mt-2 xl:mt-2 rounded mr-2 bg-gray-200 p-1 text-gray-600 hover:text-gray-800">Postman API</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;