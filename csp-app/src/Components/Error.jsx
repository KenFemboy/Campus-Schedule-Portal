import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <div class="error">
      <img src="/logo-csp.png" alt="csp-logo" class="logo-csp" />
      <p>SOMETHING WENT WRONG</p>
      <Link to="/">
        <b>Go Back</b>
      </Link>
    </div>
  );
};

export default Error;
