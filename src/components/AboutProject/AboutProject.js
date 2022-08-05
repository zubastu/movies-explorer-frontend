import React from "react";
import "./AboutProject.css";
import MainTitle from "../MainTitle/MainTitle";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-section">
      <MainTitle text="О проекте" />

      <div className="about-project__content">
        <div className="about-project__section">
          <h4 className="about-project__heading">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__subheading">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-project__section">
          <h4 className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__subheading">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="time-line">
        <span className="time-line__week-first">1 неделя</span>
        <span className="time-line__weeks-others">4 недели</span>
        <span className="time-line__stack-backend">Back-end</span>
        <span className="time-line__stack-frontend">Front-end</span>
      </div>
    </section>
  );
};

export default AboutProject;
