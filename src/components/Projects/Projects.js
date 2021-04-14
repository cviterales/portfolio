import React from "react";
import "./styles.scss";
import Project from "./Project/Project";

const Projects = () => {
  const data = [
    {
      img: "./images/mtn.jpg",
      title: "Movie to Night",
      techs: ["react", "sass"],
      gh: "https://github.com/cviterales/movie-to-night",
      demo: "https://cviterales.github.io/movie-to-night/#/",
    },
    {
      img: "./images/ag.png",
      title: "Autogestión",
      techs: ["angular", "typescript", "redux", "sass", "nodejs", "express", "mysql"],
      gh: "https://autogestion.batan.coop/#/",
      demo: "https://autogestion.batan.coop/#/",
    },
    {
      img: "./images/tmc.png",
      title: "Task Manager",
      techs: [
        "react",
        "redux",
        "sass",
        "nodejs",
        "express",
        "mysql",
        "socketio",
      ],
      gh: "https://github.com/cviterales/task-manager",
      demo: "http://181.41.240.26",
    },
    {
      img: "./images/btv.png",
      title: "Batan TV",
      techs: ["react", "redux", "sass", "nodejs", "express", "mongodb"],
      gh: "https://github.com/cviterales/batan-tv",
      demo: "https://batan.tv/#/",
    },
    {
      img: "./images/mn.png",
      title: "Monitor",
      techs: [
        "react",
        "redux",
        "css3",
        "nodejs",
        "express",
        "mysql",
        "socketio",
      ],
      gh: "https://github.com/franngette/monitor-front-end",
      demo: "https://github.com/franngette/monitor-front-end",
    },
    {
      img: "./images/sh.png",
      title: "Shop App",
      techs: ["react native", "redux", "firebase"],
      gh: "https://github.com/cviterales/the-shop-app",
      demo: "https://github.com/cviterales/the-shop-app",
    },
  ];

  const projectsHandler = () => {
    return data.map((project, i) => {
      return (
        <li className="projects__list__items" key={i} index={i} delay={0.1}>
          <Project
            src={project.img}
            title={project.title}
            techs={project.techs}
            gh={project.gh}
            demo={project.demo}
          />
        </li>
      );
    });
  };
  return (
    <section id="projects" className="projects">
      <h1 className="projects__title">{`<Projects />`}</h1>
      <ul className="projects__list">{projectsHandler()}</ul>
    </section>
  );
};

export default Projects;
