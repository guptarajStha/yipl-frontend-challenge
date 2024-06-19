import React, { useState } from "react";
import "./Navbar.css";
import company_logo from "../../Assets/Company_logo.png";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import DropDown from "../ResourceDropDown/DropDown";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [resourceNav, setResourceNav] = useState(false);
  const [handleSearchIcon, sethandleSearchIcon] = useState(false);
  const [handleHamBurger, setHandleHamBurger] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="company-logo" src={company_logo} alt="" />
        <div
          className={`hamburger`}
          onClick={() => setHandleHamBurger(!handleHamBurger)}
        >
          {!handleHamBurger ? (
            <GiHamburgerMenu size={25} />
          ) : (
            <GrClose size={25} />
          )}
        </div>
        {handleHamBurger ? (
          <div className="show-middle-from-ham">
            <div>Home</div>
            <div>About Us</div>
            <div>Case Study</div>
            <div className="resource">
              <div
                className="resource-nav"
                onClick={() => setResourceNav(!resourceNav)}
              >
                Resources
                {!resourceNav?<MdOutlineKeyboardArrowDown className="down" size={25} />:<MdOutlineKeyboardArrowUp className="down" size={25} />}
                
              </div>
              <div
                className={`${
                  resourceNav ? "dropdown-show" : "dropdown-hide"
                } dropdown `}
              >
                <DropDown />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="middle">
          <div>Home</div>
          <div>About Us</div>
          <div>Case Study</div>
          <div className="resource">
            <div
              className="resource-nav"
              onClick={() => setResourceNav(!resourceNav)}
            >
              Resources
              {!resourceNav?<MdOutlineKeyboardArrowDown className="down" size={25} />:<MdOutlineKeyboardArrowUp className="down" size={25} />}
            </div>
            <div
              className={`${
                resourceNav ? "dropdown-show" : "dropdown-hide"
              } dropdown `}
            >
              <DropDown />
            </div>
          </div>
        </div>
      </div>
      <div className="search" onClick={() => sethandleSearchIcon(true)}>
        <CiSearch size={25} />
      </div>
      <div
        className={`${
          handleSearchIcon ? "search-box-show" : "search-box-hide"
        } search-box`}
      >
        <div className="logo">
          <CiSearch size={25} />
        </div>
        <input type="text" placeholder="Search" />
        <div className="close" onClick={() => sethandleSearchIcon(false)}>
          <GrClose />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
