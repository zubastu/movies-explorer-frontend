import React from "react";
import "./Techs.css";
import MainTitle from "../MainTitle/MainTitle";

const Techs = () => {
  return (
    <div className="techs" id="tech-section">
      <MainTitle text="Технологии" />
      <div className="tech__content">
        <div className="techs__text-content">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>

        <ul className="technologies">
          <li className="technologies__item">HTML</li>
          <li className="technologies__item">CSS</li>
          <li className="technologies__item">JS</li>
          <li className="technologies__item">React</li>
          <li className="technologies__item">Git</li>
          <li className="technologies__item">Express.js</li>
          <li className="technologies__item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Techs;
