import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({
  moviesList,
  changeMovieStatus,
  checkIsSavedMovie,
}) => {
  const location = useLocation();

  return (
    <div className="movies-card-list">
      {location.pathname === "/movies" &&
        moviesList &&
        moviesList.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            changeMovieStatus={changeMovieStatus}
            checkIsSavedMovie={checkIsSavedMovie}
          />
        ))}

      {location.pathname === "/saved-movies" &&
        moviesList &&
        moviesList.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            changeMovieStatus={changeMovieStatus}
            checkIsSavedMovie={checkIsSavedMovie}
          />
        ))}
    </div>
  );
};

export default MoviesCardList;
