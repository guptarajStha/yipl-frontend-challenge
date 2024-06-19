import React from "react";
import "./Hero.css";
import Navbar from "../../Components/Navbar/Navbar";
import { IoMdArrowRoundForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="main-hero-div">
      <div className="nav-main">
        <div className="nav">
          <Navbar />
        </div>
        <hr />
      </div>
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>Beautiful analytics to grow smarter</h1>
          <div>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div>
        </div>
        <div className="button-div">
          <button>
            Why Catalog? <IoMdArrowRoundForward size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
