import React from "react";
import "./subheader.css";
import { RxHamburgerMenu } from "react-icons/rx"; // Import Hamburger Icon

const SubHeader = () => {
  return (
    <div className="sub-header">
      {/* Left Side */}
      <div className="sub-left">
        <span className="category">
          <RxHamburgerMenu className="hamburger-icon" />
          All Categories
        </span>
        <span>Featured Selection</span>
        <span>Order Protection</span>
      </div>

      {/* Right Side */}
      <div className="sub-right">
        <span>AI Sourcing Agent</span>
        <span>Buyer Central</span>
        <span>Help Center</span>
        <span>Get the App</span>
        <span>Become a Supplier</span>
      </div>
    </div>
  );
};

export default SubHeader;
