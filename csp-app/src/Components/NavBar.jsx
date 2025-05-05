import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <a href="../html/index.html">
          <img
            src="https://placehold.co/40x40?text=🏫"
            alt="school logo"
            class="logo"
          />
        </a>

        <div class="user-info">
          <div class="name">Login</div>
          <div class="department">Class Schedule Portal</div>
        </div>

        <a href="../html/login.html">
          <img
            src="https://placehold.co/40x40?text=👤"
            alt="profile icon"
            class="profile-icon"
          />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
