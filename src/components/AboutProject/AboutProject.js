import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <div className="about-project" id="about-section">
      <h3>О проекте</h3>
      <div className="about-project__content">
        <h4 className="about-project__heading">
          Дипломный проект включал 5 этапов
        </h4>
        <p className="about-project__subheading">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h4 className="about-project__heading">
          На выполнение диплома ушло 5 недель
        </h4>
        <p className="about-project__subheading">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
