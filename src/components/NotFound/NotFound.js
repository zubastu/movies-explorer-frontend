import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = navigate(-1);
  return (
    <>
      <h1>404</h1>
      <p>Не найдено</p>
      <button onClick={goBack}>Назад</button>
    </>
  );
};

export default NotFound;
