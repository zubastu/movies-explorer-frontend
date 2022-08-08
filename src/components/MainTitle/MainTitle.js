import React from "react";
import "./MainTitle.css";

const MainTitle = ({ text }) => {
  return (
    <div className="title-container">
      <h3 className="main-title">{text}</h3>
    </div>
  );
};

export default MainTitle;
