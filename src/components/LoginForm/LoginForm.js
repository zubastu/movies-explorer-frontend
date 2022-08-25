import React from "react";
import "./LoginForm.css";
import { useForm } from "../useForm";

const LoginForm = ({ onLogin }) => {
  const { values, resetForm, errors, handleChange, isValid } = useForm();
  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    resetForm();
  };

  return (
    <form className="form-login" noValidate={true} onSubmit={handleSubmit}>
      <fieldset className="form-login__field">
        <label className="form-login__label">
          E-mail
          <input
            name="email"
            type="email"
            className={`form-login__input form-login__input_type_login ${
              !isValid && errors.email && "form-login__input_type_error"
            }`}
            required={true}
            onInput={handleChange}
            value={email || ""}
          />
          <span className="form-login__error-span form-login__error-span_active">
            {errors.email}
          </span>
        </label>
        <label className="form-login__label">
          Пароль
          <input
            type="password"
            name="password"
            autoComplete="true"
            minLength={8}
            className={`form-login__input form-login__input_type_login ${
              !isValid && errors.password && "form-login__input_type_error"
            }`}
            required={true}
            onInput={handleChange}
            value={password || ""}
          />
          <span className="form-login__error-span form-login__error-span_active">
            {errors.password}
          </span>
        </label>
      </fieldset>

      <button
        type="submit"
        className={`form-login__submit ${
          !isValid && "form-login__submit_disabled"
        } hover-button`}
        disabled={!isValid}
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
