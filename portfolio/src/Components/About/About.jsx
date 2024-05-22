import React from 'react'
import "./About.scss";
import scroll from "../../assets/scroll-up.png"
import { scroller } from "react-scroll"

const About = () => {

    const handleScroll = () => {
        scroller.scrollTo('header', {
            smooth: true,
            duration: 500
        })
    };

    return (
        <main className='mainAbout'>
            <img onClick={handleScroll} className='scroll' src={scroll} alt="scroll-up" />
            <div className='aboutTest'>
                <p className='bio'>I have a background in music performance and education.
                    My first introduction to programming was in high school where we spent a semester
                    with C++ I enjoyed it and that stayed with me while I pursued my music studies.
                    During the pandemic, I tried to reignite my interest in programming, starting
                    with Python, but I felt the need for guidance. Joining BrainStation, I discovered
                    a passion for the creative problem-solving aspects of programming.
                </p>
            </div>
        </main>
    )
}

export default About