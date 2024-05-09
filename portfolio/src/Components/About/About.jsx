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
        <main>
            <img onClick={handleScroll} className='scroll' src={scroll} alt="scroll-up" />
            <div className='aboutTest'>
                HELLO MY NAME IS SANCHEZ
            </div>
        </main>
    )
}

export default About