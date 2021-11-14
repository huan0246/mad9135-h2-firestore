import React from 'react'
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
      <div className="header">
        <div className="logo">
          Logo
        </div>
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
