import { useState,useEffect} from "react";
import React from "react";
import "../components/Slider.css";
import rightChevron from "../../public/images/chevronRight24dp.png";
import leftChevron from "../../public/images/chevronLeft24dp.png";
import sliderData from "../../src/data/sliderData.js";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(1);
  
  function toggleImage(n) {
    if (sliderIndex + n > sliderData.length) {
      setSliderIndex(1);
    } else if (sliderIndex + n < 1) {
      setSliderIndex(sliderData.length);
    } else {
      setSliderIndex(sliderIndex + n);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <>
      <p className="index-info">{sliderIndex} / {sliderData.length}</p>
      <div className="slider">
        <p className="image-info">{sliderData.find(obj =>obj.id ===sliderIndex).description}</p>
        <img
          src={`../../images/cover-${sliderIndex}.png`}
          alt="estate rooms"
          className="slider-img"
        />
        <button onClick={() => toggleImage(-1)} className="navigation-button prev-button">
        <img src= {leftChevron} alt="previous img" />
        </button>
        <button onClick={() => toggleImage(1)} className="navigation-button next-button">
        <img src= {rightChevron} alt="next image" />
        </button>

      </div>
    </>
  );
};

export default Slider;
