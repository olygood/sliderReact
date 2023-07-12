import React from "react";
import { useState } from "react";
import leftChevron from "../../public/images/chevronLeft24dp.png";
import rightChevron from "../../public/images/chevronRight24dp.png";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <p className="index-info">1/5</p>
      <div className="slider">
        <p className="image-info">cover game 2023</p>
        <img
          src={"../../images/cover1.png"}
          alt="estate rooms"
          className="slider-img"
        />
        <button className="navigation-button prev-button">
        <img src= {leftChevron} alt="previous img" />
        </button>
        <button className="navigation-button next-button">
        <img src= {rightChevron} alt="next image" />
        </button>

      </div>
    </>
  );
};

export default Slider;
