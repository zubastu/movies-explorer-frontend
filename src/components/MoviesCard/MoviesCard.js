import React from "react";
import "./MoviesCard.css";
import testMovieImage from "../../images/test-movie-image.jpg";

const MoviesCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-card__description">
        <div className="movie-card__info">
          <h5 className="movie-card__title">33 слова о дизайне</h5>
          <p className="movie-card__duration">1ч 47м</p>
        </div>
        <div className="movie-card__save-checkbox">
          <input className="movie-card__input" type="checkbox" />
        </div>
      </div>
      <img className="movie-card__image" alt="Картинка" src={testMovieImage} />
    </div>
  );
};

export default MoviesCard;
