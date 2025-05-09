import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <Link to="/">
          <img alt="school logo" src="logo-csp.jpg" className="logo" />
        </Link>

        <div class="user-info">
          <div class="department">Class Schedule Portal</div>
        </div>

        <Link to="/login">
          <img
            src="https://placehold.co/40x40?text=👤"
            alt="profile icon"
            class="profile-icon"
          />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
