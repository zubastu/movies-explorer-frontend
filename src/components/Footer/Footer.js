import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p className="footer__copyright">&copy;2022</p>
        <nav className="footer__nav">
          <a
            className="nav__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a className="nav__link" href="https://github.com/" target="_blank">
            Github
          </a>
          <a className="nav__link" href="https://facebook.com/" target="_blank">
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
