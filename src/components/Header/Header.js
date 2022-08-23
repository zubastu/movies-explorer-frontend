import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header = ({ openBurgerMenu, isLoggedIn }) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" alt="Логотип" src={logo} />
      </NavLink>

      <Navigation isLoggedIn={isLoggedIn} />

      {isLoggedIn && (
        <button
          className="header__burger-button hover-button"
          onClick={() => openBurgerMenu()}
        />
      )}
    </header>
  );
};

export default Header;
