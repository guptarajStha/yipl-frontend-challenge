import React from "react";
import "./Resources.css";
import resource_card1 from "../../Assets/resources1.png";
import resource_card2 from "../../Assets/resources2.png";
import resource_card3 from "../../Assets/resources3.png";
import { IoMdArrowRoundForward } from "react-icons/io";
const Resources = () => {
  return (
    <div className="resources-main-div">
      <h1>Latest Resources</h1>
      <p className="top-desc">
        The latest resources includes Transparency Toolkit, Evidence, Best
        Practices
      </p>
      <div className="resources-card-main-div">
        <div className="card">
          <div className="card-top-div">
            <div className="card-icon-div">
              <img src={resource_card1} alt="" />
            </div>
            <div className="card-icon-heading">Tool</div>
          </div>
          <div className="card-middle-div">
            <h2>Defence Elvis</h2>
            <p>
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries...
            </p>
          </div>
          <div className="card-bottom-div">
            <a href="#">
              Learn more <IoMdArrowRoundForward />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-top-div">
            <div
              className="card-icon-div"
              style={{ backgroundColor: `#F3F6FF` }}
            >
              <img src={resource_card2} alt="" />
            </div>
            <div className="card-icon-heading">Tool</div>
          </div>
          <div className="card-middle-div">
            <h2>Defence Elvis</h2>
            <p>
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries...
            </p>
          </div>
          <div className="card-bottom-div">
            <a href="#">
              Learn more <IoMdArrowRoundForward />
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-top-div">
            <div
              className="card-icon-div"
              style={{ backgroundColor: `#FAE6E0` }}
            >
              <img src={resource_card3} alt="" />
            </div>
            <div className="card-icon-heading">Tool</div>
          </div>
          <div className="card-middle-div">
            <h2>Defence Elvis</h2>
            <p>
              It allows creating networks of public spending on goods services
              used in defense in 28 EU countries...
            </p>
          </div>
          <div className="card-bottom-div">
            <a href="#">
              Learn more <IoMdArrowRoundForward />
            </a>
          </div>
        </div>
      </div>
      <button>View all resources</button>
    </div>
  );
};

export default Resources;
