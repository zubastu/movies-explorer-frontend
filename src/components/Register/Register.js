import React from "react";
import "./Register.css";
import AuthTitle from "../AuthTitle/AuthTitle";
import AuthNav from "../AuthNav/AuthNav";
import RegisterForm from "../RegisterForm/RegisterForm";

const Register = () => {
  return (
    <section className="register">
      <AuthTitle title={"Добро пожаловать!"} />
      <RegisterForm />
      <AuthNav type="register" />
    </section>
  );
};

export default Register;
