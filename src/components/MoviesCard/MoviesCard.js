import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { mainApi } from "../../utils/MainApi";

const MoviesCard = ({ movie }) => {
  const [checked, setChecked] = useState(false);
  const { nameRU, duration, image, trailerLink } = movie;
  const { url } = image;

  const location = useLocation();

  const handleSaveMovie = (movie) => {
    mainApi
      .createMovie(movie)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally();
  };

  const handleDeleteMovie = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally();
  };

  const handleFavoriteClick = (movie) => {
    const newMovie = {
      country: movie.country || "Неизвестно",
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: `https://api.nomoreparties.co${url}`,
      thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      movieId: movie.id,
    };
    console.log(movie);
    if (location.pathname === "/movies") {
      handleSaveMovie(newMovie);
    } else {
      handleDeleteMovie(movie.id);
    }
  };

  const durationSorted = () => {
    const m = duration % 60;
    const h = (duration - m) / 60;
    return `${h} ч ${m}м`;
  };

  return (
    <div className="movie-card">
      <div className="movie-card__description">
        <div className="movie-card__info">
          <h5 className="movie-card__title">{nameRU}</h5>
          <p className="movie-card__duration">{durationSorted()}</p>
        </div>
        <div className="movie-card__save-checkbox">
          <input
            className="movie-card__input"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            onClick={() => handleFavoriteClick(movie)}
          />
        </div>
      </div>
      <img
        className="movie-card__image"
        alt={nameRU}
        src={`https://api.nomoreparties.co${url}` || movie.image}
      />
    </div>
  );
};

export default MoviesCard;
