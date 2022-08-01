import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5 className="portfolio__heading">Портфолио</h5>
      <ul className="portfolio-links">
        <li className="portfolio-links__item">
          <a
            href="https://zubastu.github.io/how-to-learn/"
            target="_blank"
            className="portfolio-links__link"
          >
            <p className="portfolio-links__text">Статичный сайт</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>

        <li className="portfolio-links__item">
          <a
            className="portfolio-links__link"
            href="https://zubastu.github.io/russian-travel/"
            target="_blank"
          >
            <p className="portfolio-links__text">Адаптивный сайт</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>

        <li className="portfolio-links__item">
          <a
            className="portfolio-links__link"
            href="https://zubastu.nomoredomains.xyz/"
            target="_blank"
          >
            <p className="portfolio-links__text">Одностраничное приложение</p>
            <span className="portfolio-links__arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
