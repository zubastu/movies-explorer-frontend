import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  return (
    <>
      <nav className="nav-movies">
        {!isLoggedIn && (
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
        )}

        {isLoggedIn && (
          <div className="nav__item-container">
            <div className="nav__item-container__movies-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav__item nav__item_type_main hover-link nav__item_type_active"
                    : "nav__item nav__item_type_main hover-link"
                }
              >
                Главная
              </NavLink>

              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "nav__item nav__item_type_films hover-link nav__item_type_active"
                    : "nav__item nav__item_type_films hover-link"
                }
              >
                Фильмы
              </NavLink>

              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive
                    ? "nav__item nav__item_type_saved-films hover-link nav__item_type_active"
                    : "nav__item nav__item_type_saved-films hover-link"
                }
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
