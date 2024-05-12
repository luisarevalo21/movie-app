import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Navbar = ({ handleSubmit, handleChange, handleClick }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar__title">Ticket +</h2>
      {location.pathname === "/" ? null : (
        <form action="" onSubmit={handleSubmit} className="navbar__search">
          <input type="text" className="movie__search" onChange={handleChange} placeholder="Search for Movies" />
          <button className="navbar__search__button ">
            <span className="material-symbols-outlined icon">search</span>
          </button>
        </form>
      )}
      <span className="material-symbols-outlined navbar__icon" onClick={handleClick}>
        menu
      </span>
    </nav>
  );
};

export default Navbar;
