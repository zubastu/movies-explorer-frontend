import React from "react";
import "./Register.css";
import AuthTitle from "../AuthTitle/AuthTitle";
import Form from "../Form/Form";
import AuthNav from "../AuthNav/AuthNav";

const Register = () => {
  return (
    <section className="register">
      <AuthTitle title={"Добро пожаловать!"} />
      <Form formName="register" />
      <AuthNav type="register" />
    </section>
  );
};

export default Register;
