import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className={`sidebar ${toggleSidebar ? "show_side_bar" : ""}`}>
      <p className="sidebar__menu">Menu</p>

      <ul className="sidebar__list">
        <li className="sidebar__list__item" onClick={() => setToggleSidebar(false)}>
          <span className="material-symbols-outlined icon">home</span> <NavLink to="/">Home</NavLink>
        </li>
        <li className="sidebar__list__item" onClick={() => setToggleSidebar(false)}>
          <span className="material-symbols-outlined icon active">theaters</span>
          <NavLink to="/movies">Movies</NavLink>
        </li>

        <hr className="sidebar__break" />
        <li className="sidebar__list__item disabled">
          <span className="material-symbols-outlined icon">settings</span> <Link to="#">Settings</Link>
        </li>
        <li className="sidebar__list__item disabled">
          <span className="material-symbols-outlined icon">help</span> <Link to="#">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
