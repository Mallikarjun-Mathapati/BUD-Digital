import React from "react";
import Sli from "../Images/Group 1627.png";
// import Swiper from "swiper";
import SliderPass from "../HomeSection/slider/SliderPass";

const SliderHome = () => {
  return (
    <>
      <div className="slider-Home">
        <div className="container1">
          <div className="slider-home-flex-main">
            <div className="slider-home-flex">
              <div className="slider-home-flex-img">
                <img src={Sli} alt="" />
              </div>
              <div className="slider-home-flex-content">
                <h2>OUR CUTTING-EDGE EMAIL MARKETING CAMPAIGNS</h2>
                <h5>Welcome Email Series</h5>
                <SliderPass />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderHome;
