import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <nav className="nav-landing">
          <div className="nav__auth-container">
            <NavLink
              to="/signup"
              className="nav__item nav__item_type_signup hover-link"
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/signin"
              className="nav__item nav__item_type_signin hover-button"
            >
              Войти
            </NavLink>
          </div>
        </nav>
      )}
      {location.pathname === "/movies" && (
        <nav className="nav-movies">
          <div className="nav__item-container">
            <NavLink
              to="/"
              className="nav__item nav__item_type_main hover-link"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="nav__item nav__item_type_films nav__item_type_active hover-link"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="nav__item nav__item_type_saved-films hover-link"
            >
              Сохраненные фильмы
            </NavLink>
          </div>

          <NavLink
            to="/profile"
            className="nav__item nav__item_type_account hover-button"
          >
            Аккаунт
          </NavLink>
        </nav>
      )}
      {location.pathname === "/saved-movies" && (
        <nav className="nav-movies">
          <div className="nav__item-container">
            <NavLink
              to="/"
              className="nav__item nav__item_type_main hover-link"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="nav__item nav__item_type_films hover-link"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="nav__item nav__item_type_saved-films nav__item_type_active hover-link"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className="nav__item nav__item_type_account hover-button"
          >
            Аккаунт
          </NavLink>
        </nav>
      )}
      {location.pathname === "/profile" && (
        <nav className="nav-movies">
          <div className="nav__item-container">
            <NavLink
              to="/"
              className="nav__item nav__item_type_main hover-link"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="nav__item nav__item_type_films hover-link"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="nav__item nav__item_type_saved-films hover-link"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className="nav__item nav__item_type_account hover-button"
          >
            Аккаунт
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Navigation;
