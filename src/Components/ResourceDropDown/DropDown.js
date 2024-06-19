import React from "react";
import { FiBook } from "react-icons/fi";
import './DropDown.css'
import { SlEnergy } from "react-icons/sl";
import { FiPlayCircle } from "react-icons/fi";
const DropDown = () => {
  return (
    <>
      <div className="dropdown-item">
        <div className="icon">
          <FiBook size={24} />
        </div>
        <div className="details">
          <h2>Blog</h2>
          <p>The latest industry news, updates and info.</p>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="icon">
          <SlEnergy size={24} />
        </div>
        <div className="details">
          <h2>Customer stories</h2>
          <p>Learn how our customers are making big changes.</p>
        </div>
      </div>
      <div className="dropdown-item">
        <div className="icon">
          <FiPlayCircle size={24} />
        </div>
        <div className="details">
          <h2>Video tutorials</h2>
          <p>Get up and running on new features and techniques.</p>
        </div>
      </div>
    </>
  );
};

export default DropDown;
