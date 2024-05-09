import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//hover effect on card
//click card shoudl provide details of the movie
//antoher fetch
//disable settings and help butons
//menu in sidebar neesd styling
//loading spinner show mock data when fetching
//place hodler card. will need to gogole.

const MovieCard = ({ movieImage, title, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movies/${id}`);
  };
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  return (
    <div className="movie__card" onClick={handleClick}>
      <img src={movieImage} alt={title} className="movie__card__image" />
      {/* {hover && (
        <div className="card__overlay">
          <p className="card__overlay__title">{title}</p>
          <button>Find Out More</button>
        </div>
      )} */}
    </div>
  );
};

export default MovieCard;
