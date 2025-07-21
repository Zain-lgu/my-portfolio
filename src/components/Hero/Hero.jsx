// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css'; // Link to its specific CSS file

// IMPORT your desk.jpg image
import DeskImage from '../../assets/desk.jpg'; // Assuming desk.jpg is in 'src/assets/'

function Hero() {
    return (
        <section id="home" className="hero-section">
            {/* This new container will hold both the text content and the image */}
            <div className="hero-two-column-container">
                <div className="hero-content-left"> {/* Renamed for clarity */}
                    <p className="intro-text">Hi, my name is</p>
                    <h1 className="hero-title">Zain Ul Abedin.</h1> {/* Added period for consistency */}
                    <h2 className="hero-subtitle">I build engaging web experiences.</h2>
                    <p className="hero-description">
                        I'm a passionate **React.js Developer** focused on creating intuitive, responsive,
                        and high-performance web applications. I thrive on solving complex problems
                        and bringing ideas to life through clean and efficient code.
                    </p>
                    <a href="#projects" className="cta-button">View My Work</a>
                </div>

                {/* New div for the image on the right */}
                <div className="hero-image-right">
                    <img src={DeskImage} alt="Developer working at desk" className="desk-img" />
                </div>
            </div>
        </section>
    );
}

export default Hero;