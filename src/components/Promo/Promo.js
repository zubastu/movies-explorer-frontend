import React from "react";
import { Link } from "react-scroll";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__heading">Проект-портфолио</h1>
      <nav className="promo__nav-container">
        <Link to="tech-section" className="promo__nav-item hover-link">
          Технологии
        </Link>
        <Link to="student-section" className="promo__nav-item hover-link">
          Мои проекты
        </Link>
      </nav>
    </section>
  );
};

export default Promo;
