import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import Movie from "./pages/MoviePage";
import Navbar from "./components/Navbar";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("e.target.value", e.target.value);
    if (e.target.value !== "") {
      // searchMovies();
    }
  };
  const handleChange = e => {
    console.log("e.target.value", e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:movieSearch" element={<Movies />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
