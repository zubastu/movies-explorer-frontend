import React from "react";
import { Link } from "react-scroll";
import "./Promo.css";

const Promo = () => {
  return (
    <div className="promo">
      <h1 className="promo__heading">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav className="promo__nav-container">
        <Link to={"about-section"} className="promo__nav-item">
          О проекте
        </Link>
        <Link to={"tech-section"} className="promo__nav-item">
          Технологии
        </Link>
        <Link to={"student-section"} className="promo__nav-item">
          Студент
        </Link>
      </nav>
    </div>
  );
};

export default Promo;
