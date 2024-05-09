import React from 'react'
import "./Projects.scss";
import scroll from "../../assets/scroll-up.png"
import { scroller } from "react-scroll"


const Projects = () => {

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
                this is projects.
            </section>
        </main>
    )
}

export default Projects