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

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Preloader active={false} />
      <NavigationPopup menuActive={menuActive} setMenuActive={setMenuActive} />
      <Routes>
        <Route path="/" element={<Main setMenuActive={setMenuActive} />} />
        <Route
          path="/movies"
          element={<Movies setMenuActive={setMenuActive} />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies setMenuActive={setMenuActive} />}
        />
        <Route
          path="/profile"
          element={<Profile setMenuActive={setMenuActive} />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
