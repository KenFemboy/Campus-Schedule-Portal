import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Student.css";
import Mainpage from "../Mainpage/Mainpage";
import axios from "axios";

const Student = () => {
  const { studentid } = useParams();
  const [favoriteSchedules, setFavoriteSchedules] = useState([]);

  const fetchFavoriteSchedules = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/student/${studentid}/allfavorites`
      );
      setFavoriteSchedules(response.data.favorites);
    } catch (error) {
      console.error("Error fetching favorite schedules:", error);
    }
  };
  const handleUnfavorite = async (scheduleCode) => {
    try {
      await axios.put(
        `http://localhost:8000/api/student/${studentid}/unfavorite`,
        { code: scheduleCode }
      );

      fetchFavoriteSchedules();
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
  useEffect(() => {
    if (studentid) {
      fetchFavoriteSchedules();

      const intervalId = setInterval(fetchFavoriteSchedules, 5000);

      return () => clearInterval(intervalId);
    }
  }, [studentid]);
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
                <button onClick={() => handleUnfavorite(item.code)}>
                  Unfavorite
                </button>
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
