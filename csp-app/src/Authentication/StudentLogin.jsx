import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      userId,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/loginStudent",
        userData
      );

      const { userId: id } = response.data;

      localStorage.setItem("userId", id);
      localStorage.setItem("userType", "student");

      navigate(`/student/${id}`);
    } catch (error) {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div id="container">
      <div className="login">
        <img src="/svg/student.svg" alt="Student Icon" />

        <h3>Student Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            placeholder="Student ID"
            maxLength={6}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
