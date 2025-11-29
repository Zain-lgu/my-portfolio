// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'; // Link to its specific CSS file

// IMPORT your desk.jpg image
import DeskImage from '../../assets/desk.jpg'; // Assuming desk.jpg is in 'src/assets/'

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg-blob"></div>
            {/* This new container will hold both the text content and the image */}
            <div className="hero-two-column-container">
                <motion.div
                    className="hero-content-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="intro-text">Hi, my name is</p>
                    <h1 className="hero-title">Zain Ul Abedin.</h1>
                    <h2 className="hero-subtitle">I build engaging web experiences.</h2>
                    <p className="hero-description">
                        I'm a passionate <b>React.js Developer</b> focused on creating intuitive, responsive,
                        and high-performance web applications. I thrive on solving complex problems
                        and bringing ideas to life through clean and efficient code.
                    </p>
                    <motion.a
                        href="#projects"
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* New div for the image on the right */}
                <motion.div
                    className="hero-image-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={DeskImage} alt="Developer working at desk" className="desk-img" />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;