import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ openBurgerMenu, isLoggedIn }) => {
  return (
    <header className="header">
      <img className="logo" alt="Логотип" src={logo} />
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
