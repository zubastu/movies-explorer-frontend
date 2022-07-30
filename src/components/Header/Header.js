import React from "react";
import "./Header.css";
import headerLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={headerLogo} />
      <Navigation />
    </header>
  );
};

export default Header;
