import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { PiChats } from 'react-icons/pi';
import './subheader.css';

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className="left">
        <div className="item">
          <LuPhoneCall className="icon" />
          <span>+92 300 1234567</span>
        </div>
        <div className="item">
          <PiChats className="icon" />
          <span>Chat with us</span>
        </div>
      </div>

      <div className="right">
        <span>mice360</span>
        <span>About Us</span>
        <span>Help Center</span>
      </div>
    </div>
  );
};

export default SubHeader;
