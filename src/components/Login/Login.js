import React from "react";
import "./Login.css";
import LoginForm from "../LoginForm/LoginForm";
import AuthTitle from "../AuthTitle/AuthTitle";
import AuthNav from "../AuthNav/AuthNav";

const Login = ({ onLogin }) => {
  return (
    <section className="login">
      <AuthTitle title="Рады видеть!" />
      <LoginForm formName="login" onLogin={onLogin} />
      <AuthNav type="login" />
    </section>
  );
};

export default Login;
