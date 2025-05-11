import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <Link to="/">
          <img src="/svg/final-logo.svg" alt="Student Icon" className="logo" />
        </Link>

        <div class="user-info">
          <div class="department">Class Schedule Portal</div>
        </div>
        <div class="logos">
          <Link to="/announcements">
            <img
              src="/svg/announcements.svg"
              alt="Student Icon"
              className="loginsvg"
            />
          </Link>
          <Link to="/login">
            <img
              src="/svg/login.svg"
              id="loginlogo"
              alt="Student Icon"
              className="loginsvg"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
