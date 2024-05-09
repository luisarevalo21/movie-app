import React, { useEffect, useState } from "react";
import { randomSearch } from "../utility/search";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = randomSearch();

    fetch(`http://www.omdbapi.com/?apikey=&s=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log("search", data);
        setMovies(data.Search.slice(0, 5));
      });
  }, []);

  return (
    <div className="container">
      <Hero />

      <div className="movie__container">
        {movies &&
          movies.map(movie => (
            <MovieCard movieImage={movie.Poster} />
            // <div className="movie__container" key={movie.imdbID}>
            //   <img src={movie.Poster} alt="" className="movie__image" />
            //   <div className="movie__descriptions">
            //     <h3 className="movie__title">{movie.Title}</h3>
            //     <p className="movie__details">{movie.Year}</p>
            //     <button className="movie__button">
            //       <span>play icon</span>Watch
            //     </button>
            //   </div>
            // </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
