import { useEffect, useState } from "react";
import movies from "./Movies/Movies";

export const useWindowParams = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loadMoviesCount, setLoadMoviesCount] = useState(0);
  const [displayedMoviesCount, setDisplayedMoviesCount] = useState(0);

  const setCurrentWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setCurrentWidth);
    setLoadMoviesCount(windowWidth > 768 ? 3 : 2);
    return () => {
      window.removeEventListener("resize", setCurrentWidth);
    };
  }, [windowWidth]);

  const showMoreMovies = () =>
    setDisplayedMoviesCount((prev) =>
      Math.min(prev + loadMoviesCount, movies.length)
    );

  const getDisplayedMovies = (movies) =>
    movies && movies.length > 0 && movies.slice(0, displayedMoviesCount);

  const filterMovies = (value, isShort, movies) => {
    return (
      movies &&
      movies.filter(
        ({ nameRU, duration }) =>
          nameRU.toLowerCase().includes(value.toLowerCase()) &&
          (!isShort || duration <= 40)
      )
    );
  };

  useEffect(() => {
    if (windowWidth > 768) {
      setDisplayedMoviesCount(12);
    } else if (windowWidth > 480) {
      setDisplayedMoviesCount(8);
    } else {
      setDisplayedMoviesCount(5);
    }
  }, [value, isShort]);

  return {
    showMoreMovies,
    getDisplayedMovies,
    displayedMoviesCount,
    filterMovies,
  };
};
