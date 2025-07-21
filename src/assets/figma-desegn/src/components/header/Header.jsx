// components/header/Header.jsx
import React from 'react';
import './header.css';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import avatarImg from '../../assets/avtar.jpg';
import DJlogo from '../../assets/DJlogo.png';
import { GiWillowTree } from 'react-icons/gi';


const Header = () => {
    return (
        <header className="main-header">
            <div className="header-left">
                <img src={DJlogo} alt="DJ Logo" className="dj-logo" />
            </div>
            <div className="header-center">
                <input
                    type="text"
                    placeholder="Experience            Things To Do            Travel blog"
                    className="search-input"
                />
                <div className="search-icon-wrapper">
                    <CiSearch className="search-icon" />
                </div>
            </div>

            <div className="header-right">
                <HiOutlineShoppingBag className="icon-H" />

                <div className="profile-login">
                    <img
                        src={avatarImg}
                        alt="Profile"
                        className="profile-img"
                    />
                    <span>Login</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
