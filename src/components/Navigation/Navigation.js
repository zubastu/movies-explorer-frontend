import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink to="/signup" className="nav__item nav__item_type_signup">
        Регистрация
      </NavLink>
      <NavLink to="/signin" className="nav__item nav__item_type_signin">
        Войти
      </NavLink>
    </nav>
  );
};

export default Navigation;
