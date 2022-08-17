import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useWindowParams } from "../useWindowParams";

const Movies = ({
  openBurgerMenu,
  isLoggedIn,
  moviesList,
  setMovies,
  getMovies,
}) => {
  const { showMoreMovies, renderMovies } = useWindowParams(moviesList);

  return (
    <section className="movies">
      <Header openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="main">
        <div className="search-container">
          <SearchForm setMovies={setMovies} getMovies={getMovies} />
        </div>

        <MoviesCardList moviesList={renderMovies} />
        <div className="more-button-container">
          <button
            className="load-more-btn"
            type="button"
            onClick={() => showMoreMovies()}
          >
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Movies;
