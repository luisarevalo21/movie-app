import React, { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";

const Navbar = ({ handleSubmit, handleChange, handleClick }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar__title">
        <NavLink to="/" className="null">
          Ticket +{" "}
        </NavLink>
      </h2>
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

      <nav className="sidebar__mobile">
        <ul className="sidebar__list">
          <li className="sidebar__list__item">
            <NavLink end className={({ isActive }) => (isActive ? "active" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink end className={({ isActive }) => (isActive ? "active" : "inactive")} to="/movies">
              Movies
            </NavLink>
          </li>

          <li className="sidebar__list__item disabled">
            <Link to="#">Settings</Link>
          </li>
          <li className="sidebar__list__item disabled">
            <Link to="#">Help</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
