import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({ openBurgerMenu, isLoggedIn, savedMovies }) => {
  return (
    <section className="saved-movies">
      <Header openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="main">
        <div className="search-container">
          <SearchForm />
        </div>
        <MoviesCardList moviesList={savedMovies} />
        <div className="more-button-container"></div>
      </main>
      <Footer />
    </section>
  );
};

export default SavedMovies;
