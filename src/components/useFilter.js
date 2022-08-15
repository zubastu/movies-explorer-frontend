import React from "react";
import { moviesApi } from "../utils/MoviesApi";

const getMoviesList = () => {
  const localMoviesList = localStorage.getItem("movies-list");
  if (localMoviesList) {
    return JSON.parse(localMoviesList);
  }
  return moviesApi
    .getMovies()
    .then((moviesList) => {
      const savedMoviesList = JSON.stringify(moviesList);
      localStorage.setItem("movies-list", savedMoviesList);
      return moviesList;
    })
    .catch((e) => console.log(e));
};

export const useFilter = () => {
  const filterMovies = (value) => {
    const moviesList = getMoviesList();
    return moviesList.filter((movie) => movie.nameRU.includes(value));
  };
  return { filterMovies };
};
