import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ moviesList }) => {
  return (
    <div className="movies-card-list">
      {moviesList &&
        moviesList.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MoviesCardList;
