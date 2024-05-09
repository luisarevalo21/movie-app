import React, { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const params = useParams();

  const searchMovies = () => {
    if (searchValue !== "") {
      fetch(`http://www.omdbapi.com/?apikey=&s=${searchValue}`)
        .then(res => res.json())
        .then(data => setMovies(data.Search.slice(0, 5)));
    }
  };

  useEffect(() => {
    console.log("params movie", params.movie);
    fetch(`http://www.omdbapi.com/?apikey=&s=batman`)
      .then(res => res.json())
      .then(data => setMovies(data.Search.slice(0, 5)));
  }, []);

  const movieCards = movies.map(movie => (
    <MovieCard key={movie.imdbID} title={movie.title} id={movie.imdbID} movieImage={movie.Poster} />
  ));
  return (
    <div className="container">
      <div className="card__container">{movieCards}</div>
    </div>
  );
};

export default MoviesPage;
