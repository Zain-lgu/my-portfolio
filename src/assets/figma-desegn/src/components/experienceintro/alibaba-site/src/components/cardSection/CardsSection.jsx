import React from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { FiInbox } from "react-icons/fi";
import { PiFramerLogo } from "react-icons/pi";
import "./cardSection.css";

const cardData = [
    {
        icon: <BsUiChecksGrid />,
        title: ["Comprehensive", "Categories"],
        text: "Explore thousands of categories from suppliers worldwide, offering a diverse range of products.",
    },
    {
        icon: <GoShieldCheck />,
        title: ["Verified", "Suppliers"],
        text: "We ensure that our suppliers are verified, providing you with secure and reliable business deals.",
    },
    {
        icon: <FiInbox />,
        title: ["Efficient", "Logistics"],
        text: "Seamless delivery system ensuring on-time and secure shipment of goods to your location.",
    },
    {
        icon: <PiFramerLogo />,
        title: ["AI-Powered", "Assistance"],
        text: "Smart AI assistance to help you find the best products and make informed business decisions.",
    },
];

const CardsSection = () => {
    return (
        <div className="cards-section">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <div className="icon">{card.icon}</div>
                    <h2>
                        {card.title[0]} <br /> {card.title[1]}
                    </h2>
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsSection;
