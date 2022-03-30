import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What have I learned?</h5>
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="skillBox">
            <article className="skill_details">
              <div className="rating">
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>Git</h4>
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
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>Express JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>GraphQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_details">
              <div className="rating">
                <h4>Jest/TDD</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
