import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [clickedMovie, setClickedMovie] = useState(null);

  const handleShowOverlay = id => {
    setClickedMovie(id);
  };

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (searchValue !== "") {
      navigate(`/movies/${searchValue}`);
      e.target.reset();
    }
  };
  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} />
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Routes>
        <Route path="/" element={<Home clickedMovie={clickedMovie} handleShowOverlay={handleShowOverlay} />} />
        {/* /issue with the routing porituin not updating when clicking search* */}
        <Route
          path="/movies"
          element={<MoviesPage clickedMovie={clickedMovie} handleShowOverlay={handleShowOverlay} />}
        />
        <Route
          path="/movies/:movieSearch"
          element={<MoviesPage clickedMovie={clickedMovie} handleShowOverlay={handleShowOverlay} />}
        />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        {/* // not found movie page */}
        <Route path="*" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
