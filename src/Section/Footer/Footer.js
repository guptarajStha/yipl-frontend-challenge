import React from "react";
import "./Footer.css";
import logo_com from "../../Assets/Company_logo.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import cc_logo from '../../Assets/cc_logo.png'
const Footer = () => {
  return (
    <>
      <div className="footer-main-div">
        <div className="footer-inner-div">
          <div className="footer-left-div">
            <img src={logo_com} alt="" />
            <div className="paragraph-div">
              We are a collaboration of non-government organisation and
              professionals working to ensure that government spending.
            </div>
            <div className="footer-icon-div">
              <div>
                <FaTwitter />
              </div>
              <div><FaLinkedinIn/> </div>
              <div><FaYoutube/> </div>
            </div>
          </div>
          <div className="footer-right-div">
                <div className="right-div-content">
                    <div className="right-div-heading">Links</div>
                    <div className="right-div-links">
                        <h6>Campaigns</h6>
                        <h6>Resources</h6>
                        <h6>News</h6>
                        <h6>About Us</h6>
                    </div>
                </div>
                <div className="right-div-content">
                    <div className="right-div-heading">Resources</div>
                    <div className="right-div-links">
                        <h6>Transparency Toolkit</h6>
                        <h6>Evidence</h6>
                        <h6>Best Practices</h6>
                    </div>
                </div>
                <div className="right-div-content">
                    <div className="right-div-heading">Work with Us</div>
                    <div className="right-div-links">
                        <h6>Contact Us</h6>
                        <h6>Join Us</h6>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-inner-div">
            <div>Terms and Conditions</div>
            <img src={cc_logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
