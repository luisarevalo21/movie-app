import React from "react";

const SearchBar = () => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.value !== "") {
      searchMovies();
    }
  };
  return (
    <form action="" onSubmit={handleSubmit} className="navbar__search">
      <input type="text" className="movie__search" onChange={handleChange} />
      <button className="navbar__search__button ">
        <span className="material-symbols-outlined icon">search</span>
      </button>
    </form>
  );
};

export default SearchBar;
