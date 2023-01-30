import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5 className="portfolio__heading">Портфолио</h5>
      <ul className="portfolio-links">
        <li className="portfolio-links__item">
          <a
            className="portfolio-links__link hover-link"
            href="https://zubastu.github.io/russian-travel/"
            target="_blank"
          >
            <p className="portfolio-links__text">Адаптивный сайт</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>

        <li className="portfolio-links__item">
          <a
            className="portfolio-links__link hover-link"
            href="https://burger.ilya-makhin.ru/"
            target="_blank"
          >
            <p className="portfolio-links__text">Одностраничное приложение Drag-n-Drop</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>

        <li className="portfolio-links__item">
          <a
            className="portfolio-links__link hover-link"
            href="https://zubastu.github.io/mesto/"
            target="_blank"
          >
            <p className="portfolio-links__text">Одностраничное адаптивное приложение</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
