import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ setMenuActive }) => {
  const location = useLocation();
  return (
    <header className="header">
      <img className="logo" alt="Логотип" src={logo} />
      <Navigation />
      {location.pathname !== "/" && (
        <button
          className="header__burger-button"
          onClick={() => setMenuActive(true)}
        />
      )}
    </header>
  );
};

export default Header;
