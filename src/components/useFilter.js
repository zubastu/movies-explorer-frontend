import React from "react";
import { moviesApi } from "../utils/MoviesApi";

export const useFilter = () => {
  const getMovies = () => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      return JSON.parse(movies);
    } else {
      moviesApi.getMovies().then((moviesList) => {
        const savedMovies = JSON.stringify(moviesList);
        localStorage.setItem("movies", savedMovies);
        return moviesList;
      });
    }
  };

  const filterMovies = (value, setMovies, isShort) => {
    const movies = getMovies();
    const filteredMovies = movies.filter(
      ({ nameRU, duration }) =>
        nameRU.toLowerCase().includes(value) & (!isShort || duration <= 40)
    );
    setMovies(filteredMovies);
  };
  return { filterMovies };
};
