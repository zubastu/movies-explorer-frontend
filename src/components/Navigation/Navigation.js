import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="nav">
      {location.pathname === "/" && (
        <>
          <NavLink to="/signup" className="nav__item nav__item_type_signup">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="nav__item nav__item_type_signin">
            Войти
          </NavLink>
        </>
      )}
      {location.pathname === "/movies" && (
        <>
          <div className="nav__item-container">
            <NavLink
              to="/movies"
              className="nav__item nav__item_type_films nav__item_type_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="nav__item nav__item_type_saved-films"
            >
              Сохраненные фильмы
            </NavLink>
          </div>

          <NavLink to="/profile" className="nav__item nav__item_type_account">
            Аккаунт
          </NavLink>
        </>
      )}
      {location.pathname === "/saved-movies" && (
        <>
          <div className="nav__item-container">
            <NavLink to="/movies" className="nav__item nav__item_type_films">
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="nav__item nav__item_type_saved-films nav__item_type_active"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink to="/profile" className="nav__item nav__item_type_account">
            Аккаунт
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
