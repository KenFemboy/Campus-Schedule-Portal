import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <nav>
          <p>Privacy Policy</p> |<p>Terms of Service</p> |<p>Contact Us</p>
        </nav>
        <Link to="/admin">
          <p>👾</p>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
