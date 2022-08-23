import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const Movies = ({
  openBurgerMenu,
  isLoggedIn,
  moviesList,
  onMovieSave,
  checkIsSavedMovie,
  stopRequestPreloader,
  isShort,
  searchValue,
  hasMoreMovies,
  loadMoreMovies,
  handleSearch,
  setIsShort,
}) => {
  console.log(hasMoreMovies);
  return (
    <section className="movies">
      <Header openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="main">
        <div className="search-container">
          <SearchForm
            isShort={isShort}
            searchValue={searchValue}
            stopLoader={stopRequestPreloader}
            handleSearch={handleSearch}
            setIsShort={setIsShort}
          />
        </div>

        <MoviesCardList
          moviesList={moviesList}
          changeMovieStatus={onMovieSave}
          checkIsSavedMovie={checkIsSavedMovie}
        />
        <div className="more-button-container">
          {hasMoreMovies && (
            <button
              className="load-more-btn"
              type="button"
              onClick={() => loadMoreMovies()}
            >
              Ещё
            </button>
          )}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Movies;
