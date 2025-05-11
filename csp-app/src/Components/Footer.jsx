import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms-of-service">Terms of Service</a> |
          <a href="/contact">Contact Us</a>
        </nav>
        <Link to="/admin">
          <a>👾</a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
