import React from "react";
import "./NavigationPopup.css";
import { NavLink, useLocation } from "react-router-dom";

const NavigationPopup = ({ menuActive, closeBurgerMenu }) => {
  const location = useLocation();

  const popupClassName = `navigation-popup ${
    menuActive && "navigation-popup_type_active"
  }`;
  const overlayClassName = `navigation-popup__overlay  ${
    menuActive && "navigation-popup__overlay_type_active"
  }`;
  const popupNavLinksClassName = `navigation-popup__links  ${
    menuActive && "navigation-popup__links_type_active"
  }`;

  return (
    <div className={popupClassName}>
      <div className={overlayClassName} onClick={() => closeBurgerMenu()} />
      <div className={popupNavLinksClassName}>
        <button
          className="navigation-popup__close hover-button"
          onClick={() => closeBurgerMenu()}
        />
        <nav className="navigation-popup__navigation-container">
          <NavLink
            to="/"
            className={
              location.pathname === "/"
                ? "navigation-popup__link navigation-popup__link_type_active hover-link"
                : "navigation-popup__link hover-link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={
              location.pathname === "/movies"
                ? "navigation-popup__link navigation-popup__link_type_active hover-link"
                : "navigation-popup__link hover-link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={
              location.pathname === "/saved-movies"
                ? "navigation-popup__link navigation-popup__link_type_active hover-link"
                : "navigation-popup__link hover-link"
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink
          to="/profile"
          className="navigation-popup__link navigation-popup__link_type_account hover-button"
        >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationPopup;
