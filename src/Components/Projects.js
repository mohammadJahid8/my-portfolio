import React, { useEffect, useState } from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useDetail from './useDetail';


const Projects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    const handleNavigate = (id) => {
        navigate(`/detail/${id}`);
    }

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    // animation


    return (
        <div id='projects'>
            <section className="bg-gray-50 ">
                <p className='text-gray-600 tracking-[.2rem] uppercase text-base pb-2 pt-20 text-center'>Works </p>
                <h2 className='text-gray-700 text-4xl text-center  font-bold'>Latest Projects</h2>
                <p className='text-gray-700 text-xl text-center mb-4'>Some of the projects I have completed recently</p>
                <div className="px-4 py-12  lg:pt-16 lg:pb-24 lg:px-16 md:px-12">
                    <div className=" mx-auto">
                        <div className="grid  gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">

                            {
                                projects.map(project => <>
                                    <div
                                        data-aos="fade-up" data-aos-duration="2000"
                                        className="flex flex-col overflow-hidden rounded-lg shadow-lg mb-6 " key={project.id}>
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-full h-full  transition duration-500 hover:scale-105" src={project.homeImage} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">
                                                <p className="text-xl font-semibold text-neutral-600">{project.name}</p>
                                                <p className="mt-3 text-base text-gray-500">{project.description.slice(0, 150)}...
                                                </p>
                                                <p
                                                    onClick={() => handleNavigate(project.id)}
                                                    className="hover:cursor-pointer hover:text-blue-400 block mt-2 text-blue-600">
                                                    More Details
                                                    <FontAwesomeIcon icon={faArrowRight} className="pl-2 " />
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center mt-6">
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                                <a href={project.client} target="_blank" rel="noopener noreferrer" className="btn mr-4">client</a>
                                                {project.server &&
                                                    <a href={project.server} target="_blank" rel="noopener noreferrer" className="btn">server</a>}
                                            </div>
                                        </div>
                                    </div>

                                </>)
                            }
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Projects;