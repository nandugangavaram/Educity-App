import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/images/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          quaerat eum adipisci obcaecati eos nam facilis non odio sint,
          voluptate quibusdam consequatur earum error deleniti quas id,
          doloribus expedita harum.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="Explore More" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
