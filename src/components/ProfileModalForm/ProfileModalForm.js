import React, { useEffect } from "react";
import "./ProfileModalForm.css";
import Popup from "../Popup/Popup";
import { useForm } from "../useForm";
import validator from "validator/es";

const ProfileModalForm = ({
  closePopup,
  isActive,
  onChangeUserInfo,
  nameUser,
  emailUser,
}) => {
  const { values, errors, handleChange, isValid, setValues } = useForm();
  const { email, name } = values;
  const isChanged = Boolean(email === emailUser && name === nameUser);
  const isDisabled = Boolean(
    !isValid || isChanged || !validator.isEmail(email)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeUserInfo(email, name);
  };

  useEffect(() => {
    setValues({ name: nameUser, email: emailUser });
  }, []);

  return (
    <Popup closePopup={closePopup} isActive={isActive}>
      <form className="form-profile" noValidate={true} onSubmit={handleSubmit}>
        <fieldset className="form-profile__field">
          <label className="form-profile__label">
            E-mail
            <input
              name="email"
              type="email"
              className={`form-profile__input form-profile__input_type_login ${
                !isValid && errors.email && "form-profile__input_type_error"
              }`}
              required
              onChange={handleChange}
              value={email || ""}
            />
            <span className="form-profile__error-span form-profile__error-span_active">
              {errors.email}
            </span>
          </label>
          <label className="form-profile__label">
            Имя
            <input
              type="text"
              name="name"
              className={`form-profile__input form-profile__input_type_login ${
                !isValid && errors.name && "form-profile__input_type_error"
              }`}
              required
              onInput={handleChange}
              value={name || ""}
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            />
            <span className="form-profile__error-span form-profile__error-span_active">
              {errors.name}
            </span>
          </label>
        </fieldset>

        <button
          type="submit"
          className={
            isDisabled
              ? "form-profile__submit form-profile__submit_disabled"
              : "form-profile__submit hover-button"
          }
          disabled={isDisabled}
        >
          Сохранить
        </button>
      </form>
    </Popup>
  );
};

export default ProfileModalForm;
