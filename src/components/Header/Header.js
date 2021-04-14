import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <section className="header">
      <nav className="header__nav">
        <ul className="header__nav__menu">
          <li className="header__nav__menu__item">
            <a
              href="/portfolio/#projects"
              aria-label="Projects"
              rel="noopener noreferrer"
            >
              Projects
            </a>
          </li>
          <li className="header__nav__menu__item">
            <a href="/portfolio/#about" aria-label="About" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li className="header__nav__menu__item">
            <a
              href="mailto: cviterales@gmail.com"
              target="_blank"
              aria-label="Gmail"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li className="header__nav__menu__item">
            <a
              target="_blank"
              href="./files/CV.pdf"
              title="cv"
              aria-label="CV"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
