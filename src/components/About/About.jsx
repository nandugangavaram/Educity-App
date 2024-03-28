import React from "react";
import "./About.css";
import about_img from "../../assets/images/about.png";
import play_icon from "../../assets/images/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="About Img" className="about-img" />
        <img src={play_icon} alt="Play Icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          doloribus magnam, ab unde error necessitatibus laudantium iure, sed
          cumque, nesciunt labore.
        </p>
        <p>
          Perferendis, impedit? Error quas est cumque quaerat non voluptas!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          doloribus magnam, ab unde error necessitatibus laudantium iure, sed
          cumque, nesciunt labore. Perferendis, impedit? Error quas est cumque
          quaerat non voluptas!
        </p>
      </div>
    </div>
  );
};

export default About;
