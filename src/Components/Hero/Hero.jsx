import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/KunaalAiImage-modified.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typewriter from 'typewriter-effect/dist/core';

const Hero = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            delay: 100,
            loop: false,
        });

        typewriter
            .typeString("Hello, I'm Kunaal Solanki,")
            .start();
    }, []);

    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="Profile" />
            <h1>
                <span id="typewriter"></span> crafting code from Mumbai.
            </h1>
            <p>
                I'm a full stack developer driven by curiosity and creativity—bringing ideas to life through elegant and efficient web solutions.
            </p>
            <div className="hero-actions">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <a
                    href="/Kunaal Resume CSE 2.0 .pdf"
                    download="Kunaal_Solanki_Resume.pdf"
                    className="hero-resume"
                >
                    Download my Resume
                </a>
            </div>
        </div>
    );
};

export default Hero;
