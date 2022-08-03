import React from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = () => {
  return (
    <div className="custom-checkbox">
      <input className="custom-checkbox__input" type="checkbox" />
      <p className="custom-checkbox__description">Короткометражки</p>
    </div>
  );
};

export default CustomCheckbox;
