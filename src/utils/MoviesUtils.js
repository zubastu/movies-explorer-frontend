import { moviesApi } from "./MoviesApi";

async function getAllMovies() {
  const movies = localStorage.getItem("movies");
  if (movies) {
    return JSON.parse(movies);
  }
  return await moviesApi.getMovies().then((movies) => {
    localStorage.setItem("movies", JSON.stringify(movies));
    return movies;
  });
}

const getLoadMoviesCount = (windowWidth) => {
  return windowWidth > 1201 ? 3 : 2;
};

const getMoviesLimit = (windowWidth) => {
  if (windowWidth > 1201) {
    return 12;
  } else if (windowWidth > 480) {
    return 8;
  } else {
    return 5;
  }
};

const getMoviesPages = (movies, windowWidth, moviesDisplayCount) => {
  let moviesLimit = getMoviesLimit(windowWidth);
  if (moviesDisplayCount !== undefined && moviesDisplayCount >= moviesLimit) {
    moviesLimit = moviesDisplayCount + getLoadMoviesCount(windowWidth);
  }
  const sliced = movies.slice(0, moviesLimit);
  return {
    movies: sliced,
    hasMoreMovies: movies.length !== sliced.length,
  };
};

const filterMovies = (movies, isShort, name) => {
  if (!name) {
    return movies.filter(({ duration }) =>
      isShort ? duration <= 40 : duration > 40
    );
  }
  return movies.filter(
    ({ nameRU, duration }) =>
      nameRU.toLowerCase().includes(name.toLowerCase()) &&
      (!isShort || duration <= 40)
  );
};

const saveSearchResultStatus = (name, isShort, movies, hasMoreMovies) => {
  localStorage.setItem("searchCheckbox", JSON.stringify(isShort));
  localStorage.setItem("lastFindMoviesList", JSON.stringify(movies));
  localStorage.setItem("searchInputValue", JSON.stringify(name));
  localStorage.setItem("hasMoreMovies", JSON.stringify(hasMoreMovies));
};

const loadSearchResultStatus = () => {
  return {
    name: JSON.parse(localStorage.getItem("searchInputValue")),
    isShort: JSON.parse(localStorage.getItem("searchCheckbox")),
    movies: JSON.parse(localStorage.getItem("lastFindMoviesList")),
    hasMoreMovies: JSON.parse(localStorage.getItem("hasMoreMovies")),
  };
};

const getMovies = (name, isShort, windowWidth, moviesDisplayCount) => {
  return getAllMovies()
    .then((movies) => {
      return filterMovies(movies, isShort, name);
    })
    .then((movies) => getMoviesPages(movies, windowWidth, moviesDisplayCount))
    .then(({ movies, hasMoreMovies }) => {
      saveSearchResultStatus(name, isShort, movies, hasMoreMovies);
      return {
        movies,
        hasMoreMovies,
      };
    });
};

export {
  getMovies,
  getLoadMoviesCount,
  getMoviesLimit,
  loadSearchResultStatus,
  filterMovies,
};
