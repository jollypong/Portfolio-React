import React from "react";
import "./projects.css";
import Project1 from "../../assets/images/projects/salbotChat.png";
import Project2 from "../../assets/images/projects/gaggle.png";
import Project3 from "../../assets/images/projects/quacker.png";
import Project4 from "../../assets/images/projects/whoWorksWhere.png";
import Project5 from "../../assets/images/projects/bate.png";
import Project6 from "../../assets/images/projects/weatherDashboard.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project1} alt="" />
          </div>
          <h3>Salbot AI Tutor</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/SalBot"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://jollypong.github.io/SalBot/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project2} alt="" />
          </div>
          <h3>Gaggle Chat Service</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/Gaggle"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://gagglechat.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project3} alt="" />
          </div>
          <h3>Quacker - Social Media Framework</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/Gaggle"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project4} alt="" />
          </div>
          <h3>Who Works Where? - CLI-based CMS</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/Who-Works-Where"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project5} alt="" />
          </div>
          <h3>Bate - Best All-time Text Editor</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/BATE-Text-Editor"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://bestalltimetexteditor.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Project6} alt="" />
          </div>
          <h3>Weather Dashboard</h3>
          <div className="buttonContainer">
            <a
              href="https://github.com/jollypong/Weather-Dashboard"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
            <a
              href="https://jollypong.github.io/Weather-Dashboard/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
