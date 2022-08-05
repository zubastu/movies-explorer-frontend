import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({ setMenuActive }) => {
  return (
    <section className="saved-movies">
      <Header setMenuActive={setMenuActive} />
      <div className="search-container">
        <SearchForm />
      </div>
      <MoviesCardList />
      <div className="more-button-container"></div>
      <Footer />
    </section>
  );
};

export default SavedMovies;
