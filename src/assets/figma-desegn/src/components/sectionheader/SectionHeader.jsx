import React from 'react';
import './sectionheader.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const SectionHeader = ({ onScroll }) => {
    return (
        <div className="section-header-wrapper">
            <h1 className="section-heading">Must-do Experiences</h1>
            <div className="section-subbar">
                <p className="section-subtext">
                    Elevate Your Adventures: Handpicked Travel Packages for Unforgettable Experiences!
                </p>
                <div className="arrow-icons">
                    <div className="arrow-box" onClick={() => onScroll('left')}>
                        <MdArrowBackIosNew />
                    </div>
                    <div className="arrow-box" onClick={() => onScroll('right')}>
                        <MdArrowForwardIos />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
