import React from "react";
import "./RegisterForm.css";
import { useForm } from "../useForm";

const RegisterForm = () => {
  const { values, resetForm, errors, handleChange, isValid } = useForm();
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    resetForm();
  };
  return (
    <form className="form-register" onSubmit={handleSubmit} noValidate={true}>
      <fieldset className="form-register__field">
        <label className="form-register__label">
          Имя
          <input
            className={`form-register__input form-register__input_type_register ${
              !isValid && errors.name && "form-register__input_type_error"
            }`}
            name="name"
            type="text"
            required={true}
            minLength={2}
            maxLength={30}
            value={name || ""}
            onInput={handleChange}
          />
          <span className="form-register__error-span form-register__error-span_active">
            {errors.name}
          </span>
        </label>

        <label className="form-register__label">
          E-mail
          <input
            className={`form-register__input form-register__input_type_register ${
              !isValid && errors.email && "form-register__input_type_error"
            }`}
            name="email"
            type="email"
            required={true}
            value={email || ""}
            onInput={handleChange}
          />
          <span className="form-register__error-span form-register__error-span_active">
            {errors.email}
          </span>
        </label>

        <label className="form-register__label">
          Пароль
          <input
            required={true}
            value={password || ""}
            minLength={8}
            onInput={handleChange}
            autoComplete="true"
            type="password"
            name="password"
            className={`form-register__input form-register__input_type_register ${
              !isValid && errors.password && "form-register__input_type_error"
            }`}
          />
          <span className="form-register__error-span form-register__error-span_active">
            {errors.password}
          </span>
        </label>
      </fieldset>

      <button
        type="submit"
        className={`form-register__submit ${
          !isValid && "form-register__submit_disabled"
        } hover-button`}
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
