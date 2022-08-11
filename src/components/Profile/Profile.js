import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import ProfileModalForm from "../ProfileModalForm/ProfileModalForm";

const Profile = ({
  openBurgerMenu,
  profileModalActive,
  closeProfileModal,
  openProfileModal,
}) => {
  const user = {
    name: "Виталий",
    email: "simple@mail.com",
  };
  return (
    <>
      <ProfileModalForm
        closePopup={closeProfileModal}
        isActive={profileModalActive}
      />
      <Header openBurgerMenu={openBurgerMenu} />
      <main className="main">
        <section className="profile">
          <h3 className="profile__heading">{`Привет, ${user.name}!`}</h3>
          <div className="profile__content">
            <div className="profile__name-container">
              <p className="profile__name-placeholder">Имя</p>
              <p className="profile__name">{user.name}</p>
            </div>
            <div className="profile__email-container">
              <p className="profile__email-placeholder">E-mail</p>
              <p className="profile__email">{user.email}</p>
            </div>
          </div>
          <div className="profile__buttons">
            <button
              className="profile__btn-change hover-button"
              onClick={() => openProfileModal()}
            >
              Редактировать
            </button>
            <button className="profile__btn-out hover-button">
              Выйти из аккаунта
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
