import React from "react";
import "./Feature2.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import person1_img from "../../Assets/w1.jpg";
import person2_img from "../../Assets/2.jpg";
import person3_img from "../../Assets/3.jpg";
import person4_img from "../../Assets/4.jpg";
const Feature2 = () => {
  return (
    <div className="feature2-main-div">
      <div className="feature2-content-div">
        <h2>Who we are</h2>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <a href="#">
          {" "}
          See more <IoMdArrowRoundForward />{" "}
        </a>
      </div>
      <div className="feature2-main-image-div">
        <div className="feature2-sub-main-image-div">
          <div className="image-container">
            <div
              className="imagee"
              style={{ backgroundImage: `url(${person1_img})` }}
            ></div>
            <h3>Adriana Homolova</h3>
          </div>
          <div className="image-container">
            <div
              className="imagee"
              style={{ backgroundImage: `url(${person2_img})` }}
            ></div>
            <h3>Karolis Granickas</h3>
          </div>
        </div>
        <div className="feature2-sub-main-image-div feature2-sub-main-image-div-2">
          <div className="image-container">
            <div
              className="imagee"
              style={{ backgroundImage: `url(${person3_img})` }}
            ></div>
            <h3>Sandor Lederer</h3>
          </div>
          <div className="image-container">
            <div
              className="imagee"
              style={{ backgroundImage: `url(${person4_img})` }}
            ></div>
            <h3>Adriana Homolova</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
