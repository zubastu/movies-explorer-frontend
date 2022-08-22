import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { useForm } from "../useForm";
import { useFilter } from "../useFilter";

const SearchForm = ({ setMovies, getMovies, stopLoader }) => {
  const [isShort, setIsShort] = useState(false);

  const { values, handleChange, isValid, resetForm } = useForm();
  const { searchInput } = values;
  const { filterMovies } = useFilter();

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies()
      .then((movies) => {
        filterMovies(searchInput, setMovies, isShort, movies);
        resetForm();
        stopLoader();
      })
      .catch((e) => console.log(e));
  };

  const handleChangeShort = (e) => {
    setIsShort(e.target.checked);
  };

  return (
    <>
      <form className="search-form" noValidate={true} onSubmit={handleSubmit}>
        <img className="search-icon" alt="Картинка поиска" src={searchIcon} />
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__input"
            placeholder="Фильм"
            required={true}
            name="searchInput"
            type="text"
            value={searchInput || ""}
            onInput={handleChange}
          />
          <button
            type="submit"
            disabled={!isValid}
            className={`search-form__submit ${
              !isValid && "search-form__submit_disabled"
            } hover-button`}
          />
        </fieldset>
      </form>
      <CustomCheckbox isShort={isShort} handleChangeShort={handleChangeShort} />
    </>
  );
};

export default SearchForm;
