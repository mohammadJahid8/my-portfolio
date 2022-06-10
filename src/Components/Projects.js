import React, { useEffect, useState } from 'react';
// import project1 from '../iamges/project1.png'
// import project2 from '../iamges/project2.png'
// import project3 from '../iamges/project3.png'
// import project4 from '../iamges/project4.png'
// import project5 from '../iamges/project5.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


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


    return (
        <div>
            <section className="bg-gray-50 ">
                <p className='text-gray-600 tracking-[.2rem] uppercase text-base pb-2 pt-20 text-center'>Works </p>
                <h2 className='text-gray-700 text-4xl text-center  font-bold'>Latest Projects</h2>
                <p className='text-gray-700 text-xl text-center mb-4'>Some of the projects I have completed recently</p>
                <div className="px-4 py-12  lg:pt-16 lg:pb-24 lg:px-16 md:px-12">
                    <div className=" mx-auto">
                        <div className="grid  gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">

                            {
                                projects.map(project => <>
                                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg" key={project.id}>
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-full h-48" src={project.homeImage} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">
                                                <p className="text-xl font-semibold text-neutral-600">{project.name}</p>
                                                <p className="mt-3 text-base text-gray-500">{project.description}
                                                </p>
                                                <p
                                                    onClick={() => handleNavigate(project.id)}
                                                    className="hover:cursor-pointer hover:text-blue-400 block mt-2 text-blue-600">
                                                    More Details
                                                    <FontAwesomeIcon icon={faArrowRight} className="pl-2 " />
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center mt-6">
                                                <a href='https://assignment-12-9e0cc.web.app/' target="_blank" rel="noopener noreferrer" className="btn mr-4">Live Site</a>
                                                <a href='https://github.com/mohammadJahid8/ventrac-manufacturer' target="_blank" rel="noopener noreferrer" className="btn mr-4">client</a>
                                                <a href='https://github.com/mohammadJahid8/ventrac-manufac-server' target="_blank" rel="noopener noreferrer" className="btn">server</a>
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