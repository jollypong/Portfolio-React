import React from "react";
import "./skills.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What have I learned?</h5>
      <h2>My Skills</h2>
      <div className="skills_container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="skillBox">
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarHalfIcon />
                <h4>Git</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <h4>Problem Solving</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>Heroku</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="skillBox">
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarBorderIcon />
                <h4>Express JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarHalfIcon />
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarHalfIcon />
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarHalfIcon />
                <StarBorderIcon />
                <h4>GraphQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarHalfIcon />
                <StarBorderIcon />
                <h4>Jest/TDD</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <StarRateIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <h4>Python</h4>
                <small>Developing</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
