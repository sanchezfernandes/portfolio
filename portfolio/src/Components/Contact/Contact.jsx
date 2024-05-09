import React from 'react'
import "./Contact.scss";
import scroll from "../../assets/scroll-up.png"
import { scroller } from "react-scroll"


const Contact = () => {

    const handleScroll = () => {
        scroller.scrollTo('header', {
            smooth: true,
            duration: 500
        })
    };

    return (
        <main className='contactMain'>
            <h2 className='contactTitle'>Contact Me</h2>
            <img onClick={handleScroll} className='scroll' src={scroll} alt="scroll-up" />

            <section className='socialLinks'>links</section>

            <section className='formSection'>
                <div className='formDiv'>
                    <form className='form' action="">
                        <label className='label' htmlFor="email">Your Email</label>
                        <input className='input' id='email' type="email" placeholder='Enter your email' />
                        <label className='label--mess' htmlFor="message">Message</label>
                        <textarea className='input' name="message" id="message" cols="30" rows="10" placeholder="Let's talk"></textarea>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact