import React from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ isShort, setIsShort }) => {
  return (
    <div className="custom-checkbox">
      <input
        className="custom-checkbox__input"
        type="checkbox"
        checked={isShort}
        onChange={(e) => setIsShort(e.target.checked)}
      />
      <p className="custom-checkbox__description">Короткометражки</p>
    </div>
  );
};

export default CustomCheckbox;
