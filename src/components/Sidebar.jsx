import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className={`sidebar ${toggleSidebar ? "show_side_bar" : ""}`}>
      <p className="sidebar__menu">Menu</p>

      <ul className="sidebar__list">
        <li className="sidebar__list__item" onClick={() => setToggleSidebar(false)}>
          <span className="material-symbols-outlined icon">home</span> <NavLink to="/">Home</NavLink>
        </li>
        <li className="sidebar__list__item" onClick={() => setToggleSidebar(false)}>
          {/* <span class="material-symbols-outlined">menu</span> */}
          <span className="material-symbols-outlined icon">theaters</span>
          <NavLink to="/movies">Movies</NavLink>
        </li>

        <hr className="sidebar__break" />
        <li className="sidebar__list__item disabled">
          <span className="material-symbols-outlined icon">settings</span> <NavLink to="#">Settings</NavLink>
        </li>
        <li className="sidebar__list__item disabled">
          <span className="material-symbols-outlined icon">help</span> <NavLink to="#">Help</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
