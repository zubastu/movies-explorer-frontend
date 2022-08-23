import React from "react";

export const useFilter = () => {
  const filterMovies = (value, setMovies, isShort, movies) => {
    const filteredMovies =
      movies &&
      movies.filter(
        ({ nameRU, duration }) =>
          nameRU.toLowerCase().includes(value.toLowerCase()) &&
          (!isShort || duration <= 40)
      );
    setMovies(filteredMovies);
  };
  return { filterMovies };
};
