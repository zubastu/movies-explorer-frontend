import React, { useContext, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileModalForm from "../ProfileModalForm/ProfileModalForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  openBurgerMenu,
  profileModalActive,
  closeProfileModal,
  openProfileModal,
  isLoggedIn,
  onChangeUserInfo,
  onExit,
}) => {
  const { name, email } = useContext(CurrentUserContext);

  return (
    <>
      <ProfileModalForm
        closePopup={closeProfileModal}
        isActive={profileModalActive}
        onChangeUserInfo={onChangeUserInfo}
      />
      <Header openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="main">
        <section className="profile">
          <h3 className="profile__heading">{`Привет, ${name}!`}</h3>
          <div className="profile__content">
            <div className="profile__name-container">
              <p className="profile__name-placeholder">Имя</p>
              <p className="profile__name">{name}</p>
            </div>
            <div className="profile__email-container">
              <p className="profile__email-placeholder">E-mail</p>
              <p className="profile__email">{email}</p>
            </div>
          </div>
          <div className="profile__buttons">
            <button
              className="profile__btn-change hover-button"
              onClick={() => openProfileModal()}
            >
              Редактировать
            </button>
            <button
              className="profile__btn-out hover-button"
              onClick={() => onExit()}
            >
              Выйти из аккаунта
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
