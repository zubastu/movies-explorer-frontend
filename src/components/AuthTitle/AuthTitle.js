import React from "react";
import "./AuthTitle.css";
import logo from "../../images/logo.svg";

const AuthTitle = ({ title }) => {
  return (
    <div className="auth-heading">
      <img className="logo" alt="Логотип" src={logo} />
      <h2 className="auth-heading__heading">{title}</h2>
    </div>
  );
};

export default AuthTitle;
