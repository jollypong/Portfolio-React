import React from "react";
import "./skills.css";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What have I learned?</h5>
      <h2>My Skills</h2>
      <div className="container skills_conatiner">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="skillbox">
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>CSS</h4>
              <small>Experienced</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>JS</h4>
              <small>Intermediate</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>Bootstrap</h4>
              <small>Experienced</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>Git</h4>
              <small>Experienced</small>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="skillbox">
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>Node JS</h4>
              <small>Intermediate</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>Express JS</h4>
              <small>Intermediate</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>MySQL</h4>
              <small>Experienced</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>MongoDB/Mongoose</h4>
              <small>Experienced</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>GraphQL</h4>
              <small>Intermediate</small>
            </article>
            <article className="skill_details">
              <StarBorderPurple500Icon />
              <h4>Python</h4>
              <small>Developing</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
