import React from 'react';
import './experiencecards.css';
import { CiHeart, CiLocationOn } from 'react-icons/ci';
import tour from '../../assets/tour.jpg';
import { TiStar } from 'react-icons/ti';

const ExperienceCards = ({ scrollRef }) => {
    const cards = Array(8).fill(0); // 6 cards for demo

    return (
        <div className="experience-cards-container" ref={scrollRef}>
            {cards.map((_, index) => (
                <div className="experience-card" key={index}>
                    <div className="card-image" style={{ backgroundImage: `url(${tour})` }}>
                        <div className="top-left-wrapper">
                            <div className="star-box">
                                <div className="star-icon"><TiStar /></div>
                                <div className="rating-value">1.5</div>
                            </div>

                        </div>

                        <div className="top-right-label">City Tour</div>
                    </div>

                    <div className="card-content">
                        <div className="card-title">
                            <p>Desert Discovery Journey: Red Dunes<br />Desert Safari & BBQ</p>
                            <CiHeart className="heart-icon" />
                        </div>

                        <div className="card-meta">
                            <div className="location"><CiLocationOn /> Dubai</div>
                            <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="reviews">(3 reviews)</span>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="price-options-wrapper">
                                <div className="pricing">
                                    <div className="from-price">
                                        From <span className="old-price">$78.59</span>
                                    </div>
                                    <div className="new-price">
                                        <strong>$63.99</strong><span className="per-person">/Person</span>
                                    </div>
                                </div>
                                <div className="options">1 option available</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceCards;
