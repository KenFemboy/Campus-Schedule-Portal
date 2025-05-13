import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/svg/final-logo.svg" alt="CSP Icon" className="logo" />
      </Link>

      <div>
        <div className="title">Class Schedule Portal</div>
      </div>
      <div className="logos">
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
  );
};

export default NavBar;
