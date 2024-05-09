import React from 'react';
import "./Header.scss";
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className='header'>
            <section className='logoSec'>
                <p>Logo</p>
            </section>
            <section className='linkSec'>
                <ul className='list'>
                    <Link to="projects" smooth={true} duration={500} className='linkTo'>Projects</Link>
                    <Link to="about" smooth={true} duration={500} className='linkTo'>About</Link>
                    <Link to="contact" smooth={true} duration={500} className='linkTo'>Contact</Link>
                </ul>
            </section>
        </header>
    )
}

export default Header