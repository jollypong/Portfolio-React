import React from "react";
import "./about.css";
import profilePic2 from "../../assets/images/profile2.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ArrowDown from "../../assets/images/arrow-down.png";

const About = () => {
  return (
    <section id="about">
      <h5>My Story</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="profile2">
            <img src={profilePic2} alt="" />
          </div>
        </div>
        <div className="about_content">
          <article className="about_card">
            <MilitaryTechIcon className="about_icon" />
            <h5>Veteran</h5>
            <small>Ex-Military (Canadian Armed Forces)</small>
            <p>
              <span>"</span> Hello, My name is Joe, I'm an aspiring full stack developer
              currently in training. Having spent the last 7 years in healthcare
              as a paramedic and a military medical technician, I jump quick to
              excitement but also know when to endure long hardwork.
            </p>
            <br>
            </br>
            <p>
              As much was helping the sick and wounded an exciting and rewarding
              career, I have decided to diverge my path and reach for my
              long-sought dream of becoming a programmer. I look forward to
              joining you and your company's adventure.<span>"</span>
            </p>
          </article>
        </div>
        <a href="#experience" className="scroll_down">
          <img src={ArrowDown} alt="" />
        </a>
      </div>
    </section>
  );
};

export default About;
