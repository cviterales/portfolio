import React from "react";
import Technology from "../../components/Technology/Technology";
import AnimationButton from "../Animations/AnimationButton";
import "./styles.scss";

const Main = () => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <div className="main__wrapper__container">
          <img
            className="main__wrapper__container__img"
            src="./images/1b.jpg"
            alt="me"
          />
        </div>
      </div>
      <div className="main__wrapper">
        <div className="main__wrapper__content">
          <p className="main__wrapper__content__title">Hi! I'm Cristian.</p>
          <p className="main__wrapper__content__subtitle">
            I'm Sofware Developer.
          </p>
          <p className="main__wrapper__content__description">
            I love programming, <br />
            I have experience in creating web and mobile applications <br />
            with JavaScript, Reactjs, React Native, Nodejs and other
            technologies.
          </p>
          <div className="main__wrapper__content__info">
            <a
              className="main__wrapper__content__info__link"
              href="https://www.linkedin.com/in/cristian-viterales"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <AnimationButton>
                <Technology tech={"linkedin"} />
              </AnimationButton>
            </a>

            <a
              className="main__wrapper__content__info__link"
              href="https://github.com/cviterales"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <AnimationButton>
                {" "}
                <Technology tech={"github"} />
              </AnimationButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
