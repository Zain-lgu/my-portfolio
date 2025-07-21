import React from "react";
import "./searchSection.css";
import { IoPlayCircleOutline, IoCameraOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const SearchSection = () => {
    return (
        <div className="search-container">
            {/* Play Icon & Heading */}
            <div className="search-header">
                <IoPlayCircleOutline className="play-icon" />
                <h3>Learn about Alibaba.com</h3>
            </div>

            {/* Main Heading */}
            <h1 className="search-title">
                The leading B2B ecommerce platform for global trade
            </h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="Drain camera, used laptops..." />
                <IoCameraOutline className="camera-icon" />
                <button className="search-btn">
                    <CiSearch className="search-icon" /> Search
                </button>
            </div>
            <div className="frequently-searched">
                <p>Frequently searched:</p>
                <div className="search-tags">
                    <button>Denim Tears Hoodie</button>
                    <button>iPhone 15 Pro Max</button>
                    <button>Louis Vuitton Bag</button>
                </div>
            </div>


        </div>
    );
};

export default SearchSection;
