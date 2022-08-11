import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({ openBurgerMenu }) => {
  return (
    <section className="movies">
      <Header openBurgerMenu={openBurgerMenu} />
      <main className="main">
        <div className="search-container">
          <SearchForm />
        </div>

        <MoviesCardList />
        <div className="more-button-container">
          <button className="load-more-btn" type="button">
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Movies;
