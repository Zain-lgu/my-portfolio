import React from 'react';
import './experienceintro.css';

const ExperienceIntro = () => {
    const buttonLabels = [
        'Day Trips', 'Sand & Desert', 'Half-day Tours', 'Full-day Tours', 'Water Activities',
        'Sightseeing Tours', 'Nature & Wildlife', 'Private  Tours', 'Family Friendly',
        'Theme Parks', 'Private & Luxury', 'City Tours', 'Safaris',
        'Observation Deck', 'Museums', 'Culture & Heritage', 'Beach & Cruises', 'Extreme Sports'
    ];

    return (
        <div className="experience-intro-wrapper">
            <div className="intro-header">
                <h1>
                    <span className="underline-word">Explore popula</span>r experiences
                </h1>

                <button className="view-all-btn">View All</button>
            </div>
            <p className="intro-description">
                The United Arab Emirates (UAE) offers a diverse range of experiences, blending modern marvels with rich cultural heritage. Here's a curated list of some of the best experiences to consider during your visit:
            </p>
            <div className="button-grid">
                {buttonLabels.map((label, index) => (
                    <button className="experience-btn" key={index}>{label}</button>
                ))}
            </div>

        </div>
    );
};

export default ExperienceIntro;
