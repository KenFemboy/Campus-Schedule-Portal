import React, { useEffect, useState } from "react";
import "./Student.css";
import Mainpage from "../Mainpage/Mainpage";
import axios from "axios";

const Student = () => {
  const [favoriteSchedules, setFavoriteSchedules] = useState([]);

  const fetchFavoriteSchedules = async (studentId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/${studentId}/favorites`
      );
      setFavoriteSchedules(response.data.favorites);
    } catch (error) {
      console.error("Error fetching favorite schedules:", error);
    }
  };

  useEffect(() => {
    fetchFavoriteSchedules("143323");
  }, []);

  return (
    <div>
      <Mainpage />

      <div className="favorites">
        <h1>Your Favorite Schedules</h1>
        {favoriteSchedules.length > 0 ? (
          <ul>
            {favoriteSchedules.map((item) => (
              <li key={item._id} className="favorite-schedule">
                <p>
                  <b>Course:</b> {item.course}
                </p>
                <p>
                  <b>Code:</b> {item.code}
                </p>
                <p>
                  <b>Time:</b> {item.time}
                </p>
                <p>
                  <b>Status:</b> {item.status}
                </p>
                <p>
                  <b>Room:</b> {item.room}
                </p>
                <p>
                  <b>Professor:</b> {item.professor}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite schedules.</p>
        )}
      </div>
    </div>
  );
};

export default Student;
