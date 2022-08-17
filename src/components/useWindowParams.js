import { useEffect, useState } from "react";

export const useWindowParams = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [countMovies, setCountMovies] = useState(0);

  const setCurrentWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setCurrentWidth);

    windowWidth >= 1280 && setCountMovies(12);
    windowWidth <= 768 && setCountMovies(8);
    windowWidth <= 480 && setCountMovies(5);

    return () => {
      window.removeEventListener("resize", setCurrentWidth);
    };
  }, [windowWidth]);

  const showMoreMovies = () => {
    return windowWidth >= 1280
      ? setCountMovies((prev) => prev + 3)
      : setCountMovies((prev) => prev + 2);
  };

  const renderMovies = (movies) =>
    movies && movies.length > 0 && movies.slice(0, countMovies);

  return {
    showMoreMovies,
    renderMovies,
  };
};
