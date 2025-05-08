import React from "react";
import NavBar from "../Components/NavBar";
import "./Faculty.css";
const Faculty = () => {
  return (
    <div>
      <NavBar />
      <div class="container">
        <div class="card">
          <div class="course">Electrical Engineering</div>
          <div>4444</div>
          <div>
            1:30pm - 2:30pm
            <br />
            Room V3
          </div>
          <div class="buttons">
            <button class="attend-btn">Attend</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>

        <div class="card">
          <div class="course">Electrical Engineering</div>
          <div>4444</div>
          <div>
            1:30pm - 2:30pm
            <br />
            Room V3
          </div>
          <div class="buttons">
            <button class="attend-btn">Attend</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>

        <div class="card gray">
          <div class="course">Electrical Engineering</div>
          <div>4444</div>
          <div>
            1:30pm - 2:30pm
            <br />
            Room V3
          </div>
          <div class="buttons">
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>

        <div class="card red">
          <div class="course">Electrical Engineering</div>
          <div>4444</div>
          <div>
            1:30pm - 2:30pm
            <br />
            Room V3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
