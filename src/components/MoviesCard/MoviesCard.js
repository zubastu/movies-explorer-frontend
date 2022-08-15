import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
  const { nameRU, duration, image, trailerLink } = movie;
  const { url } = image;

  const durationSorted = () => {
    const m = duration % 60;
    const h = (duration - m) / 60;
    return `${h} ч ${m}м`;
  };

  console.log(movie);
  return (
    <div className="movie-card">
      <div className="movie-card__description">
        <div className="movie-card__info">
          <h5 className="movie-card__title">{nameRU}</h5>
          <p className="movie-card__duration">{durationSorted()}</p>
        </div>
        <div className="movie-card__save-checkbox">
          <input className="movie-card__input" type="checkbox" />
        </div>
      </div>
      <img
        className="movie-card__image"
        alt="Картинка"
        src={`https://api.nomoreparties.co${url}`}
      />
    </div>
  );
};

export default MoviesCard;
