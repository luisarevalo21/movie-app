import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log("movie", params.movie);
    fetch(`http://www.omdbapi.com/?apikey=&i=tt1285016`)
      .then(res => res.json())
      .then(data => {
        console.log("search", data);
        setMovie(data.Search);
      });
  }, []);

  return (
    <div className="container">
      <div className="movie__container">
        <img
          src="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          alt=""
          className="movie__image"
        />

        <div className="movie__descriptions">
          <h3 className="movie__title">Title</h3>

          <p className="movie__details">date . time . rating</p>

          <p>Overview:</p>
          <p className="movie__synopsis">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ullam, quod quas tempora quaerat laboriosam
            iusto culpa deleniti in similique totam maxime eaque eveniet velit perspiciatis assumenda sunt perferendis
            quibusdam.
          </p>

          <button className="movie__button">
            <span>play icon</span>Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
