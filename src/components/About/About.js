import React from "react";
import "./styles.scss";
import Technology from "../Technology/Technology";
import {technologies} from "../../techs"

/* const technologies = [
  "react",
  "react native",
  "redux",
  "sass",
  "css3",
  "html5",
  "javascript",
  "typescript",
  "nodejs",
  "express",
  "mysql",
  "firebase",
  "mongodb",
  "nextjs",
  "angular",
  "php",
  "socketio",
  "yarn",
  "npm",
  "github",
  "git",
  "jira",
]; */

const Card = ({ children }) => {
  return <div className="about__card">{children}</div>;
};

const About = () => {
  const technologyHandler = (techs) => {
    return techs.map((technology, i) => {
      return (
        <li className="about__wrapper__content__list__item" key={i}>
          <Technology tech={technology} />
          <p>{technology}</p>
        </li>
      );
    });
  };

  return (
    <section id="about" className="about">
      <div>
        <h1 className="about__title">{"{ About : Me }"}</h1>
      </div>
      <div className="about__wrapper">
        <div className="about__wrapper__content">
          <Card>
            <p className="about__wrapper__content__title">
              Something about me ...
            </p>
            <p className="about__wrapper__content__info">
              My name is Cristian Viterales, <br />
              I'm from Mar del plata, Buenos Aires, Argentina. <br />I like tech
              and video games, but the most <strong>important! </strong>
              is that <strong>I love and enjoy coding.</strong>
            </p>
          </Card>
          <Card>
            <p className="about__wrapper__content__title">
              ... and some of my experience
            </p>
            <p className="about__wrapper__content__info">
              I have been a software developer since 2009. In this way I have
              worked on frontend, backend and database with many technologies
              but my favorite areas are <strong>Frontend</strong> and{" "}
              <strong>Mobile. </strong>
              I like things to be fun and look good. <br />
              At work I'm responsible and persistent with the objectives, I like
              to help and share my experiences, learn new technologies and
              methodologies as well.
              <br />
            </p>
          </Card>
        </div>
        <div className="about__wrapper__content">
          <Card>
            <p className="about__wrapper__content__title">
              {"{ Some technologies I use and have experience }"}
            </p>
            <ul className="about__wrapper__content__list">
              {technologyHandler(technologies)}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
