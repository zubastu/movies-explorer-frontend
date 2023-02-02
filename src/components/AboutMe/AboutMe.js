import React from "react";
import "./AboutMe.css";
import MainTitle from "../MainTitle/MainTitle";
import testPicture from "../../images/DSC_4353.JPG";

const AboutMeAboutMe = () => {
  return (
    <section className="about-me" id="student-section">
      <MainTitle text="Обо мне" />
      <div className="about-me__description">
        <div className="about-me__text-content">
          <h3 className="about-me__title">Илья</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__text">
            Я родился в Северодвинске и живу в Балашихе. Я люблю слушать музыку,
            а ещё увлекаюсь бегом. Разрабатываю пользовательские интерфейсы Это
            мой дипломный проект, бэкэнд для которого я написал сам. В
            дальнейшем планирую развиваться в данном направлении.
          </p>
          <ul className="links">
            <li className="links__item">
              <a
                className="links__link hover-link"
                href="https://github.com/zubastu"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="Мое фото" src={testPicture} />
      </div>
    </section>
  );
};

export default AboutMeAboutMe;
