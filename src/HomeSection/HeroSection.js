import React from "react";
import heroBg from "../Images/email.jpg";
// import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section-image">
          <img src={heroBg} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      <a href="#iamsection">
        <div className="fixed-enquiry-hero-section">Enquiry Now!</div>
      </a>
    </div>
  );
};

export default HeroSection;
