import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ movie, changeMovieStatus, checkIsSavedMovie }) => {
  const [isSaved, setIsSaved] = useState(checkIsSavedMovie(movie));
  const { nameRU, duration, image, trailerLink } = movie;

  const toNormalTime = () => {
    const m = duration % 60;
    const h = (duration - m) / 60;
    return `${h} ч ${m}м`;
  };

  const location = useLocation();

  const movieImage =
    location.pathname === "/movies"
      ? `https://api.nomoreparties.co${image.url}`
      : image;

  const handleClickOnMovieButton = () => {
    changeMovieStatus(movie, setIsSaved);
    !isSaved && setIsSaved(!isSaved);
  };

  return (
    <div className="movie-card">
      <div className="movie-card__description">
        <div className="movie-card__info">
          <h5 className="movie-card__title">{nameRU}</h5>
          <p className="movie-card__duration">{toNormalTime()}</p>
        </div>

        {location.pathname === "/movies" && (
          <button
            className={`${
              isSaved
                ? "movie-card__save-button_active"
                : "movie-card__save-button"
            } hover-button`}
            onClick={() => handleClickOnMovieButton()}
          />
        )}

        {location.pathname === "/saved-movies" && (
          <button
            className="movie-card__delete-button hover-button"
            onClick={() => {
              changeMovieStatus(movie._id);
            }}
          />
        )}
      </div>
      <a className="movie-card__link" href={trailerLink} target="_blank">
        <img className="movie-card__image" alt={nameRU} src={movieImage} />
      </a>
    </div>
  );
};

export default MoviesCard;
