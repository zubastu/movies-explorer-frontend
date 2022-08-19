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
import login from "../Login/Login";
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
    moviesList: [],
    savedMovies: [],
  });
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const {
    menuActive,
    tooltipActive,
    tooltipSuccess,
    tooltipContent,
    profileModalActive,
    isLoggedIn,
    moviesList,
    savedMovies,
  } = state;

  const navigate = useNavigate();

  const startRequestPreloader = () => setPreloaderActive(true);

  const stopRequestPreloader = () => setPreloaderActive(false);

  const showErrorPopup = (message) => {
    setState({
      ...state,
      preloaderActive: false,
      tooltipSuccess: false,
      tooltipActive: true,
      tooltipContent: `${message}`,
    });
  };

  const showSuccessPopup = (message) => {
    setState({
      ...state,
      preloaderActive: false,
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
  const setMovies = (movies) => {
    setState({ ...state, moviesList: movies });
  };

  const getSavedMovies = () => {
    mainApi.getSavedMovies().then((moviesList) => {
      const savedMovies = JSON.stringify(moviesList);
      localStorage.setItem("saved-movies", savedMovies);
      return moviesList;
    });
  };
  const setSavedMovies = (movies) =>
    setState({ ...state, savedMovies: movies });

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
          navigate("/", { replace: true });
        })
        .catch((e) => console.log(e));
  }, []);

  const checkIsSavedMovie = (id) =>
    savedMovies.some((movie) => movie.movieId === id);

  const onMovieSave = (movie) => {
    const newMovie = {
      country: movie.country || "Неизвестно",
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };

    mainApi
      .createMovie(newMovie)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally();
  };

  const onMovieDelete = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally();
  };

  const changeMovieStatus = (movie, isSaved, setIsSaved) => {
    setIsSaved(checkIsSavedMovie(movie.id || movie.movieId));

    if (isSaved) {
      onMovieDelete(movie.movieId);
    } else {
    }
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
                setMovies={setMovies}
                moviesList={moviesList}
                getMovies={getMovies}
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
                setSavedMovies={setSavedMovies}
                getSavedMovies={getSavedMovies}
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
