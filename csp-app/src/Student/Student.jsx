import React from "react";
import "./Student.css";
import NavBar from "../Components/NavBar";
const Student = () => {
  return (
    <div>
      <NavBar />
      <div class="container">
        <div class="header">
          Your Schedules
          <span>
            <a href="../html/studentADDCODE.html" rel="noopener noreferrer">
              ➕
            </a>
          </span>
        </div>
        <br />
        <div class="cards">
          <div class="card">
            <div class="close">×</div>
            <div>IT</div>
            <div>4444</div>
            <div>1:30pm - 2:30pm</div>
            <div>Room V3</div>
          </div>
          <div class="card">
            <div class="close">×</div>
            <div>IT</div>
            <div>4445</div>
            <div>2:30pm - 3:30pm</div>
            <div>Room V4</div>
          </div>
          <div class="card">
            <div class="close">×</div>
            <div>IT</div>
            <div>4444</div>
            <div>1:30pm - 2:30pm</div>
            <div>Room V3</div>
          </div>
          <div class="card">
            <div class="close">×</div>
            <div>IT</div>
            <div>4445</div>
            <div>2:30pm - 3:30pm</div>
            <div>Room V4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
