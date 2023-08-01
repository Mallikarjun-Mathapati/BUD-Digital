import { useEffect, useState } from "react";
import "../slider/Slider.css";

const SliderMain = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setAnimation(true);
    }, 1000);
  }, [currentIndex, animation]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    setAnimation(!animation);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + text.length) % text.length);
    setAnimation(!animation);
  };

  return (
    <>
      <div className="text-slider">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        <p className={`slider-1 ${animation ? "active-slider" : "slider-1"}`}>
          {text[currentIndex]}
        </p>
        <button className="slider-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </>
  );
};

export default SliderMain;
