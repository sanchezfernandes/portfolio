import React from 'react'
import "./Home.scss";
import Projects from '../../Components/Projects/Projects';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <main id='home' className='homeMain'>
            <div className='test'>this is home</div>
            <div id="projects"><Projects /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
        </main>
    )
}

export default Home