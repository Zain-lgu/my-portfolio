import React, { useRef } from 'react';
import LocationBar from '../locationbar/LocationBar';
import SectionHeader from '../sectionheader/SectionHeader';
import ExperienceCards from '../experiencecards/ExperienceCards';
import ExperienceIntro from '../experienceintro/ExperienceIntro';

const MainContent = () => {
    const scrollRef = useRef();

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 320; // Adjust this for scroll distance
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="main-content-wrapper">
            <LocationBar />
            <SectionHeader onScroll={handleScroll} />
            <ExperienceCards scrollRef={scrollRef} />
            <ExperienceIntro />
        </div>
    );
};

export default MainContent;
