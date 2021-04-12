import React from "react";
import AnimatedButton from "../../Animations/AnimationButton";
import "./styles.scss";
import Technology from "../../Technology/Technology";

const Project = ({ src, title, techs, gh, demo }) => {
  const technologyHandler = () => {
    return techs.map((technology, i) => {
      return (
        <li className="project__technologies__items" key={i}>
          <Technology tech={technology} />
        </li>
      );
    });
  };

  return (
    <div className="project">
      <div className="project__content">
        <img src={src} alt="" className="project__content__img" />
      </div>
      <p className="project__title">{title}</p>
      <ul className="project__technologies">{technologyHandler()}</ul>
      <div className="project__items">
        <AnimatedButton>
          <a
            className="project__items__link"
            href={demo}
            alt={title}
            target="_blank"
            aria-label={title}
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </AnimatedButton>
        <AnimatedButton>
          <a
            className="project__items__link"
            href={gh}
            alt={title}
            target="_blank"
            aria-label={title}
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Project;
