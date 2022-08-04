import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = () => {
  return (
    <section className="movies">
      <Header />
      <div className="search-container">
        <SearchForm />
      </div>

      <div className="movies__content">
        <MoviesCardList />
        <div className="more-button-container">
          <button className="load-more-btn" type="button">
            Ещё
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Movies;
