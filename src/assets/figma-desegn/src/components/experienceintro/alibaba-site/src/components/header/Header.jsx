import React from "react";
import "./header.css";
import { AiOutlineAlibaba } from "react-icons/ai"; // Alibaba Icon
import { TbWorld } from "react-icons/tb"; // Globe Icon
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Cart Icon
import { FaRegUser } from "react-icons/fa"; // User Icon

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        {/* Left Side */}
        <div className="left-section">
          <AiOutlineAlibaba className="logo-icon" />
          <span className="logo-text">Alibaba.com</span>
        </div>

        {/* Right Side */}
        <div className="right-section">
          {/* Deliver To */}
          <div className="delivery">
            <span className="deliver-text">Deliver to:</span>
            <div className="country">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="US Flag"
                className="country-flag"
              />
              <span className="country-text">US</span>
            </div>
          </div>

          {/* Language & Currency */}
          <div className="language">
            <TbWorld className="world-icon" />
            <span className="lang-text">English - USD</span>
          </div>

          {/* Shopping Cart */}
          <div className="cart">
            <PiShoppingCartSimpleLight className="cart-icon" />
          </div>

          {/* Sign In & Sign Up */}
          <div className="auth-buttons">
            <div className="sign-in">
              <FaRegUser className="user-icon" />
              <span className="sign-in-text">Sign In</span>
            </div>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
