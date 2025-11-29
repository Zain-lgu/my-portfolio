// src/components/Header/Header.jsx
// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css'; // Link to its specific CSS file

// IMPORRTANT: Import your image here
import YourLogo from '../../assets/Zain.png'; // Adjust path if your image is elsewhere

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        {/* Changed from text to image */}
        <a href="#home" className="logo" onClick={closeMenu}>
          {/* IMPORTANT: Add alt text for accessibility (e.g., "Your Name Logo") */}
          <img src={YourLogo} alt="Your Name Logo" className="logo-img" />
        </a>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;