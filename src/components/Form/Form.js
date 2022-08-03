import React from "react";
import "./Form.css";

const Form = ({ formName }) => {
  if (formName === "login") {
    return (
      <form className={`form form__type_${formName}`}>
        <fieldset className="form__field">
          <label className="form__label">
            E-mail
            <input
              type="email"
              className={`form__input form__input_type_${formName}`}
            />
            <span className="form__error-span">Что то не так</span>
          </label>
          <label className="form__label">
            Пароль
            <input className={`form__input form__input_type_${formName}`} />
            <span className="form__error-span">Что то не так</span>
          </label>
        </fieldset>

        <button
          type="submit"
          className={`form__submit form__submit_type_${formName}`}
        >
          Войти
        </button>
      </form>
    );
  }

  if (formName === "register") {
    return (
      <form className={`form form__type_${formName}`}>
        <fieldset className="form__field">
          <label className="form__label">
            Имя
            <input className={`form__input form__input_type_${formName}`} />
            <span className="form__error-span">Что-то пошло не так...</span>
          </label>

          <label className="form__label">
            E-mail
            <input className={`form__input form__input_type_${formName}`} />
            <span className="form__error-span">Что-то пошло не так...</span>
          </label>

          <label className="form__label">
            Пароль
            <input className={`form__input form__input_type_${formName}`} />
            <span className="form__error-span">Что-то пошло не так...</span>
          </label>
        </fieldset>

        <button
          type="submit"
          className={`form__submit form__submit_type_${formName}`}
        >
          Зарегистрироваться
        </button>
      </form>
    );
  }

  if (formName === "search") {
    return (
      <form className={`form form__type_${formName}`}>
        <fieldset className="form__field">
          <input className={`form__input form__input_type_${formName}`} />
          <span className="form__error-span"></span>
        </fieldset>
        <button
          type="submit"
          className={`form__submit form__submit_type_${formName}`}
        >
          search
        </button>
      </form>
    );
  }
};

export default Form;