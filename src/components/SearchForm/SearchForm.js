import React, { useEffect } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { useForm } from "../useForm";

const SearchForm = ({
  searchValue,
  handleSearch,
  isShort,
  setIsShort,
  handleSetShortMovies,
}) => {
  const { values, handleChange, isValid, setValues } = useForm();
  const { searchInput } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput, isShort);
  };

  useEffect(() => {
    setValues({ searchInput: searchValue });
  }, []);

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
      <CustomCheckbox
        isShort={isShort}
        setIsShort={setIsShort}
        handleSetShortMovies={handleSetShortMovies}
        searchInput={searchInput}
      />
    </>
  );
};

export default SearchForm;
