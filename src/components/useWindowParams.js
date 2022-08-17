import { useEffect, useState } from "react";

export const useWindowParams = (movies) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [countMovies, setCountMovies] = useState(0);

  const setCurrentWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setCurrentWidth);

    if (windowWidth <= 480) {
      setCountMovies(5);
    } else if (windowWidth >= 768) {
      setCountMovies(8);
    } else if (windowWidth >= 1280) {
      setCountMovies(12);
    }

    return () => {
      window.removeEventListener("resize", setCurrentWidth);
    };
  }, [windowWidth]);

  const showMoreMovies = () => {
    return windowWidth >= 1280
      ? setCountMovies((prev) => prev + 3)
      : setCountMovies((prev) => prev + 2);
  };

  let renderMovies =
    movies && movies.length > 0 ? movies.slice(0, countMovies) : [];
  console.log(countMovies);

  return {
    showMoreMovies,
    renderMovies,
  };
};
