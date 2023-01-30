import React from "react";
import "./AuthTitle.css";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

const AuthTitle = ({ title }) => {
  return (
    <div className="auth-heading">
      <Link to='/'><img className="logo" alt="Логотип" src={logo} /></Link>
      <h2 className="auth-heading__heading">{title}</h2>
    </div>
  );
};

export default AuthTitle;
