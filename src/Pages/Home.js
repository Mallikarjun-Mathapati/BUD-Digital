import React from "react";
import HeroSection from "../HomeSection/HeroSection";
import ContactForm from "../HomeSection/ContactForm";
import EmailMarket from "../HomeSection/EmailMarket";
import Quality from "../HomeSection/Quality";
import Message from "../HomeSection/Message";
import Banner from "../HomeSection/Banner";
// import SliderPass from "../HomeSection/slider/SliderPass";
import WePlan from "../HomeSection/WePlan";
import SliderHome from "../HomeSection/SliderHome";
import FlipBox from "../HomeSection/FlipBox";
import Banner1 from "../HomeSection/Banner1";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <EmailMarket />
      <Quality />
      <Message />
      <Banner />
      {/* <SliderPass /> */}
      <WePlan />
      <SliderHome />
      <FlipBox />
      <Banner1 />
    </>
  );
};

export default Home;
