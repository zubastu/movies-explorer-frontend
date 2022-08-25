import React from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({
  isShort,
  setIsShort,
  handleSetShortMovies,
  searchInput,
}) => {
  const handleSetIsShort = () => {
    handleSetShortMovies(searchInput, isShort);
    setIsShort(!isShort);
  };

  return (
    <div className="custom-checkbox">
      <input
        className="custom-checkbox__input"
        type="checkbox"
        checked={isShort}
        onChange={handleSetIsShort}
      />
      <p className="custom-checkbox__description">Короткометражки</p>
    </div>
  );
};

export default CustomCheckbox;
