import React from 'react'
import "./Hero.scss";
import sanchez from "../../assets/file.png";
import hero from "../../assets/hero.png";

const Hero = () => {
    return (
        <main className='heroMain'>
            <img className='heroImg' src={hero} alt="hero image" />

            {/* <section className='titleDiv'>
                <h2 className='heroTitle'>Hello I’m Sanchez , I am a full stack software engineer based in New York City. </h2>
            </section>
            <section className='pictureDiv'>
                <img className='sanchez' src={sanchez} alt="sanchez" />
            </section> */}
        </main>
    )
}

export default Hero