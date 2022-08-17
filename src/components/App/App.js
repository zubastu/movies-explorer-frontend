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
    currentUser: {},
  });
  const [preloaderActive, setPreloaderActive] = useState(false);

  const {
    menuActive,
    tooltipActive,
    tooltipSuccess,
    tooltipContent,
    profileModalActive,
    isLoggedIn,
    moviesList,
    savedMovies,
    currentUser,
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

  const successLogin = ({ token, name, email, _id }) => {
    setState({ ...state, isLoggedIn: true, currentUser: { name, email, _id } });
    token && localStorage.setItem("jwt", token);
    navigate("/movies", { replace: true });
  };

  const onHandleExit = () => {
    setState({ ...state, isLoggedIn: false });
    localStorage.removeItem("jwt");
    navigate("/signin", { replace: true });
  };

  const openBurgerMenu = () => setState({ ...state, menuActive: true });
  const closeBurgerMenu = () => setState({ ...state, menuActive: false });

  const closeTooltip = () => setState({ ...state, tooltipActive: false });

  const openProfileModal = () =>
    setState({ ...state, profileModalActive: true });

  const closeProfileModal = () =>
    setState({ ...state, profileModalActive: false });

  const onLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((res) => successLogin(res))
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
    console.log(movies);
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
    console.log(email, name);
    mainApi
      .patchUserInfo(email, name)
      .then((res) => console.log(res))
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
        })
        .catch((e) => console.log(e));
  }, []);

  return (
    <>
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
      <CurrentUserContext.Provider value={currentUser}>
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
