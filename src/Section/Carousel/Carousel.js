import React,{useRef} from "react";
import "./Carousel.css";
import logo1 from "../../Assets/Company_logo1.png";
import logo2 from "../../Assets/Company_logo2.png";
import logo3 from "../../Assets/Company_logo3.png";
import logo4 from "../../Assets/Company_logo4.png";
import logo5 from "../../Assets/Company_logo5.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="carousel-div">
      <div className="left-button" onClick={scrollLeft}>
        <MdKeyboardArrowLeft size={25} className="arrow" />
      </div>
      <div className="slider-items" ref={sliderRef}>
        <div>
          <img src={logo5} alt="" />
        </div>
        <div>
          <img src={logo1} alt="" />
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={logo3} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
      </div>
      <div className="right-button" onClick={scrollRight}>
        <MdKeyboardArrowRight size={25} className="arrow" />
      </div>
    </div>
  );
};

export default Carousel;
