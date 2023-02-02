import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5 className="portfolio__heading">Портфолио</h5>
      <ul className="portfolio-links">
        <li className="portfolio-links__item">
          <p className="portfolio-links__text">Адаптивный сайт:</p>
          <div className="portfolio-links__container">
            <a
              className="portfolio-links__link hover-link"
              href="https://zubastu.github.io/russian-travel/"
              target="_blank"
            >
              Демо
            </a>
            <p className="portfolio-links__text">/</p>
            <a
              className="portfolio-links__link hover-link"
              href="https://github.com/zubastu/russian-travel"
              target="_blank"
            >
              Код
            </a>
          </div>
        </li>

        <li className="portfolio-links__item">
          <p className="portfolio-links__text">
            Одностраничное приложение Drag-n-Drop:
          </p>
          <div className="portfolio-links__container">
            <a
              className="portfolio-links__link hover-link"
              href="https://burger.ilya-makhin.ru/"
              target="_blank"
            >
              Демо
            </a>
            <p className="portfolio-links__text">/</p>
            <a
              className="portfolio-links__link hover-link"
              href="https://github.com/zubastu/react-burger"
              target="_blank"
            >
              Код
            </a>
          </div>
        </li>

        <li className="portfolio-links__item">
          <p className="portfolio-links__text">
            Одностраничное адаптивное приложение:
          </p>
          <div className="portfolio-links__container">
            <a
              className="portfolio-links__link hover-link"
              href="https://zubastu.github.io/mesto/"
              target="_blank"
            >
              Демо
            </a>
            <p className="portfolio-links__text">/</p>
            <a
              className="portfolio-links__link hover-link"
              href="https://github.com/zubastu/react-mesto-auth"
              target="_blank"
            >
              Код
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
