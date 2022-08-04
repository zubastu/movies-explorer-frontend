import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="Логотип" src={logo} />
      <Navigation />
      <button className="header__burger-button" />
    </header>
  );
};

export default Header;
