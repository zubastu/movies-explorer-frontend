import React from "react";
import "./Login.css";
import Form from "../Form/Form";
import AuthTitle from "../AuthTitle/AuthTitle";
import AuthNav from "../AuthNav/AuthNav";

const Login = () => {
  return (
    <section className="login">
      <AuthTitle title={"Рады видеть!"} />
      <Form formName="login" />
      <AuthNav type={"login"} />
    </section>
  );
};

export default Login;
