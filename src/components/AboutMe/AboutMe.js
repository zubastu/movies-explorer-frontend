import React from "react";
import "./AboutMe.css";
import MainTitle from "../MainTitle/MainTitle";

const AboutMeAboutMe = () => {
  return (
    <div className="about-me" id="student-section">
      <MainTitle text="Студент" />
      <div className="about-me__description">
        <h3 className="about-me__title">Илья</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 27 лет</p>
        <p className="about-me__text">
          Я родился в Северодвинске и живу в Балашихе, закончил Колледж
          Автомобильного Транспорта №9. Я люблю слушать музыку, а ещё увлекаюсь
          бегом. Недавно начал кодить. Это мой дипломный проект, в дальнейшем
          планирую развиваться в данном направлении.
        </p>
        <img className="about-me__photo" alt="Мое фото" />
        <a href="https://facebook.com/">Facebook</a>
        <a href="https://github.com/zubastu">Github</a>
      </div>
    </div>
  );
};

export default AboutMeAboutMe;
