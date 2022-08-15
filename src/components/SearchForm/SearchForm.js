import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { useForm } from "../useForm";
import { useFilter } from "../useFilter";

const SearchForm = ({ setMovies }) => {
  const { values, handleChange, isValid, resetForm } = useForm();
  const { searchInput } = values;
  const { filterMovies } = useFilter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
    const filteredMovies = filterMovies(searchInput);
    console.log(filteredMovies);
    setMovies(filteredMovies);
    resetForm();
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
      <CustomCheckbox />
    </>
  );
};

export default SearchForm;
