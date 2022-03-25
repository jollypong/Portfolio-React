import React from "react";
import "./projects.css";
import Project1 from "../../assets/images/projects/salbotChat.png";
import Project2 from "../../assets/images/projects/gaggle.png";
import Project3 from "../../assets/images/projects/quacker.png";
import Project4 from "../../assets/images/projects/whoWorksWhere.png";
import Project5 from "../../assets/images/projects/bate.png";
import Project6 from "../../assets/images/projects/weatherDashboard.png";

const data = [
  {
    id: 1,
    image: Project1,
    title: "Salbot AI Tutor",
    github: "https://github.com/jollypong/SalBot",
    demo: "https://jollypong.github.io/SalBot/",
  },
  {
    id: 2,
    image: Project2,
    title: "Gaggle Chat Service",
    github: "https://github.com/jollypong/Gaggle",
    demo: "https://gagglechat2.herokuapp.com/",
  },
  {
    id: 3,
    image: Project3,
    title: "Quacker - Social Media Framework (Backend Only, No Demo)",
    github: "https://github.com/jollypong/Quacker",
  },
  {
    id: 4,
    image: Project4,
    title: "Who Works Where? - CLI-based CMS (Backend Only, No Demo)",
    github: "https://github.com/jollypong/Who-Works-Where",
  },
  {
    id: 5,
    image: Project5,
    title: "Bate - Best All-time Text Editor",
    github: "https://github.com/jollypong/BATE-Text-Editor",
    demo: "https://bestalltimetexteditor.herokuapp.com/",
  },
  {
    id: 6,
    image: Project6,
    title: "Weather Dashboard",
    github: "https://github.com/jollypong/Weather-Dashboard",
    demo: "https://jollypong.github.io/Weather-Dashboard/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <div key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="buttonContainer">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
