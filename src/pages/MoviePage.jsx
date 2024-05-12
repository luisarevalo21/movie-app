import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingCard from "../components/LoadingCard";
import { VITE_API_KEY } from "../utility/apiKey";

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = movieId => {
    fetch(`http://www.omdbapi.com/?apikey=${VITE_API_KEY}&i=${movieId}`, { referrerPolicy: "unsafe_url" })
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      });
  };
  useEffect(() => {
    if (params.movieId) {
      setIsLoading(true);
      searchMovies(params.movieId);
      setIsLoading(false);
    }

    return () => {
      // setMovie(null);
    };
  }, [params.movieId]);

  if (movie === null || isLoading) {
    return <LoadingCard />;
  }

  return (
    <div className="container">
      <div className="movie__container">
        <img src={movie.Poster} alt="" className="movie__image" />
        <div className="movie__descriptions">
          <h3 className="movie__title">{movie.Title}</h3>
          <p className="movie__details">
            {movie.Released} - {movie.Runtime} - {movie.Ratings[0].Value}
          </p>
          <p>Overview:</p>
          <p className="movie__synopsis">{movie.Plot}</p>
          <button className="movie__button">
            <span className="material-symbols-outlined">play_arrow</span>Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
