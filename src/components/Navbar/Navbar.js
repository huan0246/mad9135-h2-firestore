import React from 'react'
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
      <div className="header">
        <h1 className="logo">
          Foods Collection
        </h1>
        <div className="links">
          <NavLink activeclassname="active" to="/" exact>
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/addfavorite">
            Add Favorite
          </NavLink>
        </div>
      </div>
  );
}
