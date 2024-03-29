import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({
  openBurgerMenu,
  isLoggedIn,
  savedMovies,
  setSavedMovies,
  getSavedMovies,
  onMovieDelete,
  checkIsSavedMovie,
  stopRequestPreloader,
  handleSearchSavedMovies,
}) => {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSetShortSavedMovies = (name, isShort) => {
    handleSearchSavedMovies(name, !isShort);
  };

  return (
    <section className="saved-movies">
      <Header openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="main">
        <div className="search-container">
          <SearchForm
            setMovies={setSavedMovies}
            getMovies={getSavedMovies}
            stopLoader={stopRequestPreloader}
            handleSearch={handleSearchSavedMovies}
            isShort={isShort}
            setIsShort={setIsShort}
            handleSetShortMovies={handleSetShortSavedMovies}
          />
        </div>
        <MoviesCardList
          moviesList={savedMovies}
          changeMovieStatus={onMovieDelete}
          checkIsSavedMovie={checkIsSavedMovie}
        />
        <div className="more-button-container"></div>
      </main>
      <Footer />
    </section>
  );
};

export default SavedMovies;
