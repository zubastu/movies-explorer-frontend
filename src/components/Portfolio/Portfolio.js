import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h5 className="portfolio__heading">Портфолио</h5>
      <ul className="links">
        <li className="links__item">Статичный сайт</li>
        <li className="links__item">Адаптивный сайт</li>
        <li className="links__item">Одностраничное приложение</li>
      </ul>
    </div>
  );
};

export default Portfolio;
