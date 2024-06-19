import React from "react";
import "./Feature1.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import card1_img from "../../Assets/card1.jpg";
import card2_img from "../../Assets/card2.jpg";
import card3_img from "../../Assets/card3.jpg";
const Feature1 = () => {
  return (
    <div className="main-div">
      <div className="content-div">
        <h2>Campaigns</h2>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div className="main-card-div">
        <div className="card-div">
          <div className="img-div" style={{backgroundImage:`url(${card1_img})`}}>
            {/* <img src={card1_img} alt="" /> */}
          </div>
          <div className="card-details-div">
            <h3>Open Data Directive</h3>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,{" "}
            </p>
          </div>
          <a href="#">
            Learn more <IoMdArrowRoundForward />
          </a>
        </div>
        <div className="card-div">
          <div className="img-div" style={{backgroundImage:`url(${card2_img})`}}>
            {/* <img src={card2_img} alt="" /> */}
          </div>
          <div className="card-details-div">
            <h3>Open Data Directive</h3>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,{" "}
            </p>
          </div>
          <a href="#">
            Learn more <IoMdArrowRoundForward />
          </a>
        </div>
        <div className="card-div">
          <div className="img-div" style={{backgroundImage:`url(${card3_img})`}}>
           
          </div>
          <div className="card-details-div">
            <h3>Open Data Directive</h3>
            <p>
              In view of Russia’s military action against the Ukrainian people,
              being concerned about ensuring that European funds In view of
              Russia’s military action against the Ukrainian people,{" "}
            </p>
          </div>
          <a href="#">
            Learn more <IoMdArrowRoundForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
