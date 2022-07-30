import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p className="footer__copyright">&copy;2022</p>
        <nav className="footer__nav">
          <NavLink className="nav__link" to="">
            Яндекс.Практикум
          </NavLink>
          <NavLink className="nav__link" to="">
            Github
          </NavLink>
          <NavLink className="nav__link" to="">
            Facebook
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
