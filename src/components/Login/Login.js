import React from "react";
import "./Login.css";
import LoginForm from "../LoginForm/LoginForm";
import AuthTitle from "../AuthTitle/AuthTitle";
import AuthNav from "../AuthNav/AuthNav";

const Login = () => {
  return (
    <section className="login">
      <AuthTitle title="Рады видеть!" />
      <LoginForm formName="login" />
      <AuthNav type="login" />
    </section>
  );
};

export default Login;
