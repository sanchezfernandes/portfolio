import React from 'react'
import "./Projects.scss";
import scroll from "../../assets/scroll-up.png"
import dummy from "../../assets/dummy.jpeg"
import { scroller } from "react-scroll"


const Projects = () => {

    const projectsData = [
        { id: 1, title: 'Project 1', description: 'Description of Project 1', image: dummy },
        { id: 2, title: 'Project 2', description: 'Description of Project 2', image: dummy },
        { id: 3, title: 'Project 3', description: 'Description of Project 3', image: dummy }
    ];

    const handleScroll = () => {
        scroller.scrollTo('header', {
            smooth: true,
            duration: 500
        })
    };

    return (
        <main className='projectsMain'>
            <img onClick={handleScroll} className='scroll' src={scroll} alt="scroll-up" />
            <section className='projectTest'>
                {projectsData.map(project => (
                    <div key={project.id} className='projectCard'>
                        <h3>{project.title}</h3>
                        <img className='pImage' src={project.image} alt="" />
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Projects