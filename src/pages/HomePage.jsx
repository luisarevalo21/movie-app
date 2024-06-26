import React, { useEffect, useState } from "react";
import { randomSearch } from "../utility/search";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import { VITE_API_KEY } from "../utility/apiKey";
import { useLocation } from "react-router-dom";

const HomePage = ({ clickedMovie, handleShowOverlay }) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(randomSearch());

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=9883fcaf&s=${searchValue}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search.slice(0, 5));
      });
  }, []);

  return (
    <div className="container">
      <Hero />

      <h3 className="hero__title">
        Searched for: <span className="movie__search__value">{searchValue}</span>
      </h3>
      <div className="movie__container">
        {movies &&
          movies.map(movie => (
            <MovieCard
              movieImage={movie.Poster}
              id={movie.imdbID}
              title={movie.Title}
              key={movie.imdbID}
              clickedMovie={clickedMovie}
              handleShowOverlay={handleShowOverlay}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
