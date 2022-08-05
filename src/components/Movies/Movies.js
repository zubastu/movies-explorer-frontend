import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ setMenuActive }) => {
  return (
    <section className="movies">
      <Header setMenuActive={setMenuActive} />
      <div className="search-container">
        <SearchForm />
      </div>

      <MoviesCardList />
      <div className="more-button-container">
        <button className="load-more-btn" type="button">
          Ещё
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default Movies;
