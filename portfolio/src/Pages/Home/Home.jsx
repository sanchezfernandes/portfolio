import React from 'react'
import "./Home.scss";
import Projects from '../../Components/Projects/Projects';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <main id='home' className='homeMain'>
            <div id='hero'><Hero /></div>
            <div id="projects"><Projects /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
        </main>
    )
}

export default Home