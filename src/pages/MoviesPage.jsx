import React, { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import LoadingCard from "../components/LoadingCard";
import { useParams } from "react-router-dom";
import { VITE_API_KEY } from "../utility/apiKey";
import { randomSearch } from "../utility/search";
const MoviesPage = ({ clickedMovie, handleShowOverlay }) => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovies = searchString => {
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=9883fcaf&s=${searchString}`)
      .then(res => res.json())
      .then(data => {
        if (data.Error) {
          setError(true);
          setIsLoading(false);
          setMovies([]);
          return;
        }
        console.log("data", data);
        setMovies(data.Search.slice(0, 5));
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (params.movieSearch) {
      searchMovies(params.movieSearch);
      setSearchedMovie(params.movieSearch);
    } else {
      const randomSearchString = randomSearch();
      searchMovies(randomSearchString);
      setSearchedMovie(randomSearchString);
    }
  }, [params.movieSearch]);

  const movieCards = isLoading ? (
    <>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </>
  ) : (
    movies.map(movie => (
      <MovieCard
        key={movie.imdbID}
        title={movie.Title}
        id={movie.imdbID}
        clickedMovie={clickedMovie}
        handleShowOverlay={handleShowOverlay}
        movieImage={movie.Poster}
      />
    ))
  );

  const errorBlock = error && <h2>No results found with that string, try again</h2>;

  return (
    <div className="container">
      <h3 className="movie__search__title">
        Searched for: <span className="movie__search__value">{searchedMovie}</span>
      </h3>

      {/* {isLoading && <LoadingCard />} */}
      <div className="card__container">{movieCards}</div>
      <div className="card__container">{errorBlock}</div>
    </div>
  );
};

export default MoviesPage;
