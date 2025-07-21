// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css'; // Link to its specific CSS file

// IMPORRTANT: Import your image here
import YourLogo from '../../assets/Zain.png'; // Adjust path if your image is elsewhere

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Changed from text to image */}
        <a href="#home" className="logo">
          {/* IMPORTANT: Add alt text for accessibility (e.g., "Your Name Logo") */}
          <img src={YourLogo} alt="Your Name Logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;