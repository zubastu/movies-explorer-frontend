import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import NavigationPopup from "../NavigationPopup/NavigationPopup";
import TooltipModalWindow from "../TooltipModalWindow/TooltipModalWindow";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [state, setState] = useState({
    menuActive: false,
    tooltipActive: false,
    tooltipSuccess: false,
    tooltipContent: "",
    profileModalActive: false,
    isLoggedIn: false,
  });
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const {
    menuActive,
    tooltipActive,
    tooltipSuccess,
    tooltipContent,
    profileModalActive,
    isLoggedIn,
  } = state;

  const navigate = useNavigate();

  const startRequestPreloader = () => setPreloaderActive(true);

  const stopRequestPreloader = () => setPreloaderActive(false);

  const showErrorPopup = (message) => {
    setState({
      ...state,
      tooltipSuccess: false,
      tooltipActive: true,
      tooltipContent: `${message}`,
    });
  };

  const showSuccessPopup = (message) => {
    setState({
      ...state,
      tooltipSuccess: true,
      tooltipActive: true,
      tooltipContent: `${message}`,
    });
  };

  const openProfileModal = () =>
    setState({ ...state, profileModalActive: true });

  const closeProfileModal = () =>
    setState({ ...state, profileModalActive: false });

  const openBurgerMenu = () => setState({ ...state, menuActive: true });

  const closeBurgerMenu = () => setState({ ...state, menuActive: false });

  const closeTooltip = () => setState({ ...state, tooltipActive: false });

  const successLogin = ({ token, name, email, _id }) => {
    setState({ ...state, isLoggedIn: true });
    setCurrentUser({ name, email, _id });
    token && localStorage.setItem("jwt", token);
  };

  const onHandleExit = () => {
    setState({ ...state, isLoggedIn: false });
    localStorage.removeItem("jwt");
    navigate("/signin", { replace: true });
  };

  const onLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((res) => {
        successLogin(res);
        navigate("/movies", { replace: true });
      })
      .catch((e) => showErrorPopup(`${e} Неправильная почта или пароль`))
      .finally();
  };

  const onRegister = (name, email, password) => {
    startRequestPreloader();
    mainApi
      .register(name, email, password)
      .then((res) => {
        res &&
          mainApi
            .login(email, password)
            .then((res) => {
              res.token && successLogin(res);
              navigate("/movies", { replace: true });
            })
            .catch((e) => console.log(e));
      })
      .catch((e) =>
        showErrorPopup(`${e} Введите другие данные, либо они уже используются`)
      )
      .finally(() => stopRequestPreloader());
  };

  const getMovies = () => {
    const movies = localStorage.getItem("movies");
    if (!movies) {
      return moviesApi
        .getMovies()
        .then((moviesList) => {
          const savedMovies = JSON.stringify(moviesList);
          localStorage.setItem("movies", savedMovies);
          return moviesList;
        })
        .catch((e) => showErrorPopup(`Что-то пошло не так ${e.message}`));
    } else {
      return JSON.parse(movies);
    }
  };

  const setMoviesList = (movies) => {
    setMovies(movies);
  };

  const getSavedMovies = () => {
    const movies = localStorage.getItem("saved-movies");
    if (!movies) {
      return mainApi
        .getSavedMovies()
        .then((moviesList) => {
          const savedMovies = JSON.stringify(moviesList);
          moviesList.length > 0 &&
            localStorage.setItem("saved-movies", savedMovies);
          setSavedMovies(moviesList);
          return moviesList;
        })
        .catch((e) => showErrorPopup(`Что-то пошло не так ${e.message}`));
    }
    setSavedMovies(JSON.parse(movies));
    return JSON.parse(movies);
  };

  const setSavedMoviesList = (movies) => {
    if (movies.length <= 0) {
      localStorage.removeItem("saved-movies");
    }
    localStorage.setItem("saved-movies", JSON.stringify(movies));
    setSavedMovies(movies);
  };

  const onChangeUserInfo = (email, name) => {
    mainApi
      .patchUserInfo(email, name)
      .then(({ name, email, _id }) => {
        setCurrentUser({ name, email, _id });
        closeProfileModal();
      })
      .catch((e) => console.log(e))
      .finally();
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    token &&
      mainApi
        .authorization()
        .then((res) => {
          successLogin(res);
          getSavedMovies();
          getMovies();
          navigate("/", { replace: true });
        })
        .catch((e) => console.log(e));
  }, []);

  const checkIsSavedMovie = (movie) =>
    savedMovies.some((savedMovie) => movie.id === savedMovie.movieId);

  const onMovieDelete = (id) => {
    mainApi
      .deleteMovie(id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((movie) => {
          return movie._id !== id;
        });
        setSavedMoviesList(newSavedMovies);
        showSuccessPopup("Успешно удалено из избранного!");
      })
      .catch((e) => showErrorPopup(`Что-то пошло не так ${e.message}`))
      .finally();
  };

  const onMovieSave = (movie, setIsSaved) => {
    setIsSaved(checkIsSavedMovie(movie));
    if (checkIsSavedMovie(movie)) {
      showErrorPopup("Фильм уже добавлен в избранное");
      return;
    }

    const newMovie = {
      country: movie.country || "Неизвестно",
      director: movie.director || "Неизвестно",
      duration: movie.duration || "Неизвестно",
      year: movie.year || "Неизвестно",
      description: movie.description || "Неизвестно",
      trailerLink: movie.trailerLink || "Неизвестно",
      nameRU: movie.nameRU || "Неизвестно",
      nameEN: movie.nameEN || "Неизвестно",
      image: `https://api.nomoreparties.co${movie.image.url}` || "Неизвестно",
      thumbnail:
        `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` ||
        "Неизвестно",
      movieId: movie.id,
    };

    mainApi
      .createMovie(newMovie)
      .then((savedMovie) => {
        const newSavedMovies = [savedMovie, ...savedMovies];
        setSavedMoviesList(newSavedMovies);
        showSuccessPopup("Успешно добавлено в избранное!");
      })
      .catch((e) => showErrorPopup(`Что-то пошло не так ${e.message}`))
      .finally();
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <TooltipModalWindow
          isSuccess={tooltipSuccess}
          isActive={tooltipActive}
          closePopup={closeTooltip}
          tooltipContent={tooltipContent}
        />
        <Preloader preloaderActive={preloaderActive} />
        <NavigationPopup
          menuActive={menuActive}
          closeBurgerMenu={closeBurgerMenu}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main openBurgerMenu={openBurgerMenu} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                openBurgerMenu={openBurgerMenu}
                isLoggedIn={isLoggedIn}
                setMovies={setMoviesList}
                moviesList={movies}
                getMovies={getMovies}
                onMovieSave={onMovieSave}
                checkIsSavedMovie={checkIsSavedMovie}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                openBurgerMenu={openBurgerMenu}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMoviesList}
                getSavedMovies={getSavedMovies}
                onMovieDelete={onMovieDelete}
                checkIsSavedMovie={checkIsSavedMovie}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                openBurgerMenu={openBurgerMenu}
                closeProfileModal={closeProfileModal}
                profileModalActive={profileModalActive}
                openProfileModal={openProfileModal}
                isLoggedIn={isLoggedIn}
                onChangeUserInfo={onChangeUserInfo}
                onExit={onHandleExit}
              />
            }
          />

          <Route path="/signin" element={<Login onLogin={onLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={onRegister} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
