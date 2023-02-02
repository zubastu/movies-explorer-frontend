import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">Проект для размещения моих работ</p>
      <div className="footer__content">
        <p className="footer__copyright">&copy;2022</p>
        <nav className="footer__nav">
          <a
            className="nav__link hover-link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="nav__link hover-link"
            href="https://github.com/zubastu"
            target="_blank"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
