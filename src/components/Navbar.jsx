import React, { useState } from "react";

const Navbar = ({ handleSubmit, handleChange }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">Ticket +</h2>
      <form action="" onSubmit={handleSubmit} className="navbar__search">
        <input type="text" className="movie__search" onChange={handleChange} />
        <button className="navbar__search__button ">
          <span className="material-symbols-outlined icon">search</span>
        </button>
      </form>
      <span className="material-symbols-outlined navbar__icon">menu</span>
    </nav>
  );
};

export default Navbar;
