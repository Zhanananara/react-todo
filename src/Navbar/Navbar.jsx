import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-list">
        <NavLink to="/">List</NavLink>
        <br />
        <NavLink to="/add">Add</NavLink>
        <button className="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Navbar;
