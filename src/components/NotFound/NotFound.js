import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__heading">404</h2>
        <p className="not-found__subheading">Страница не найдена</p>
      </div>
      <p className="not-found__go-back hover-link" onClick={goBack}>
        Назад
      </p>
    </div>
  );
};

export default NotFound;
