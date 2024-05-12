import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//hover effect on card
//click card shoudl provide details of the movie
//antoher fetch
//disable settings and help butons
//menu in sidebar neesd styling
//loading spinner show mock data when fetching
//place hodler card. will need to gogole.

const MovieCard = ({ movieImage, title, id, handleShowOverlay, clickedMovie }) => {
  const navigate = useNavigate();
  // const [showOverlay, setShowOverlay] = useState(false);
  const handleClick = () => {
    // setShowOverlay(prev => !prev);
    handleShowOverlay(id);
    // navigate(`/movie/${id}`);
  };
  const handleNavigate = () => {
    navigate(`/movie/${id}`);
  };
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
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
