import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div class="error">
      <img src="/logo-csp.png" alt="csp-logo" class="logo-csp" />
      <p>SOMETHING WENT WRONG</p>
      <Link>
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export default Error;
