import React from "react";
import "./Login.css";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <NavBar />
      <div id="container">
        <div class="login">
          <img src="https://placehold.co/70" alt="" />
          <h3>Student Login</h3>
          <form action="../html/student/student.html" method="post">
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              placeholder="Student ID"
              maxLength={6}
            />
            <input type="password" placeholder="Password" />
            <Link to="/student">
              <input type="button" value="Login" />
            </Link>
          </form>
        </div>

        <div class="login">
          <img src="https://placehold.co/70" alt="" />
          <h3>Faculty Login</h3>
          <form action="" method="post">
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              placeholder="Faculty ID"
              maxLength={6}
            />
            <input type="password" placeholder="Password" />
            <Link to="/faculty">
              <input type="button" value="Login" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
