import React, { useState } from "react";
import { Routes, Route } from "react-router";
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

function App() {
  const [state, setState] = useState({
    menuActive: false,
    preloaderActive: false,
    tooltipActive: false,
    tooltipSuccess: false,
    tooltipContent: "",
    profileModalActive: true,
    isLoggedIn: true,
    moviesList: [],
  });

  const {
    menuActive,
    preloaderActive,
    tooltipActive,
    tooltipSuccess,
    tooltipContent,
    profileModalActive,
    isLoggedIn,
    moviesList,
  } = state;

  const showErrorPopup = (e) =>
    setState({
      ...state,
      tooltipSuccess: false,
      tooltipActive: true,
      tooltipContent: `${e.status} ${e.message}`,
    });

  const openBurgerMenu = () => setState({ ...state, menuActive: true });
  const closeBurgerMenu = () => setState({ ...state, menuActive: false });

  const closeTooltip = () => setState({ ...state, tooltipActive: false });

  const openProfileModal = () =>
    setState({ ...state, profileModalActive: true });

  const closeProfileModal = () =>
    setState({ ...state, profileModalActive: false });

  const setMovies = (movies) => setState({ ...state, moviesList: movies });

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
            <Movies
              openBurgerMenu={openBurgerMenu}
              isLoggedIn={isLoggedIn}
              setMovies={setMovies}
              moviesList={moviesList}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              openBurgerMenu={openBurgerMenu}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              openBurgerMenu={openBurgerMenu}
              closeProfileModal={closeProfileModal}
              profileModalActive={profileModalActive}
              openProfileModal={openProfileModal}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
