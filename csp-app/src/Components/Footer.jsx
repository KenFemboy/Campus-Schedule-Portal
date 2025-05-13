import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="site-footer">
      <p>Developed by</p>
      <nav>
        <p>Charles Kent Labrador</p>
        <p>Ismael III Baguilar </p>
        <p>Ian Barrientos</p>
        <p>Gryxdane Maldo</p>
        <p>Johnroy Chatto</p>
      </nav>
      <Link to="/admin">
        <p>👾</p>
      </Link>
    </footer>
  );
};

export default Footer;
