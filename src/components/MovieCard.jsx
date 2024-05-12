import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieImage, title, id, handleShowOverlay, clickedMovie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handleShowOverlay(id);
  };
  const handleNavigate = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie__card" onClick={handleClick}>
      <img src={movieImage} alt={title} className="movie__card__image" />

      <div className={`card__overlay ${clickedMovie === id ? "card__overlay--show" : ""}`}>
        <p className="card__overlay__title">{title}</p>
        <button className="card__overlay__button" onClick={handleNavigate}>
          Find Out More
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
