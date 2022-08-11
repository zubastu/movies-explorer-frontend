import React from "react";
import "./NavigationPopup.css";
import { NavLink, useLocation } from "react-router-dom";

const NavigationPopup = ({ menuActive, closeBurgerMenu }) => {
  const location = useLocation();
  return (
    <div
      className={
        menuActive
          ? "navigation-popup navigation-popup_type_active"
          : "navigation-popup"
      }
    >
      <div
        className={
          menuActive
            ? "navigation-popup__overlay navigation-popup__overlay_type_active"
            : "navigation-popup__overlay"
        }
      ></div>
      <div
        className={
          menuActive
            ? "navigation-popup__links navigation-popup__links_type_active"
            : "navigation-popup__links"
        }
      >
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
