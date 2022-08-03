import React from "react";
import "./AuthNav.css";
import { Link } from "react-router-dom";

const AuthNav = ({ type }) => {
  return (
    <div className="auth-navigation">
      {type === "login" && (
        <p className="auth-navigation__text">
          Ещё не зарегистрированы?
          <Link className="auth-navigation__link" to="/signup">
            Регистрация
          </Link>
        </p>
      )}
      {type === "register" && (
        <p className="auth-navigation__text">
          Уже зарегистрированы?
          <Link className="auth-navigation__link" to="/signin">
            Войти
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthNav;
