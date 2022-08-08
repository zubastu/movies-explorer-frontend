import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const SearchForm = () => {
  return (
    <>
      <form className="form form__type_search">
        <img className="search-icon" alt="Картинка поиска" src={searchIcon} />
        <fieldset className="form__field form__field__type_search">
          <input
            className="form__input form__input_type_search"
            placeholder="Фильм"
            required={true}
          />
          <button
            type="submit"
            className="form__submit form__submit_type_search hover-button"
          />
        </fieldset>
      </form>
      <CustomCheckbox />
    </>
  );
};

export default SearchForm;
