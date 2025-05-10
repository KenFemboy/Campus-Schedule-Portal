import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Mainpage.css";
import NavBar from "../Components/NavBar";

const Mainpage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // 👈 Get current route path

  useEffect(() => {
    const fetchSchedules = () => {
      axios
        .get("http://localhost:8000/api/schedules")
        .then((res) => {
          setSchedules(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch schedules:", err);
          setLoading(false);
        });
    };

    fetchSchedules(); // initial fetch
    const interval = setInterval(fetchSchedules, 15000); // refresh every 15 seconds

    return () => clearInterval(interval); // clean up
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "cancelled":
        return "cancelled";
      case "ongoing":
      case "on going":
        return "ongoing";
      case "upcoming":
        return "upcoming";
      default:
        return "";
    }
  };

  const renderButtons = (schedule) => {
    const status = schedule.status.toLowerCase();

    if (location.pathname.startsWith("/student/")) {
      return (
        <button
          className="favorite-btn"
          onClick={() => handleFavorite(schedule._id)}
        >
          Favorite
        </button>
      );
    }

    if (location.pathname.startsWith("/faculty/")) {
      // Only show buttons if the status is not "ongoing" or "cancelled"
      if (
        status !== "ongoing" &&
        status !== "cancelled" &&
        status !== "on going"
      ) {
        return (
          <>
            <button className="cancel-btn">Cancel</button>
          </>
        );
      }
    }
    return null;
  };

  const handleFavorite = async (scheduleId) => {
    const studentId = localStorage.getItem("userId"); // Or pass it as a prop/state

    try {
      await axios.post(
        `http://localhost:8000/api/student/${studentId}/favorites`,
        {
          scheduleId,
        }
      );

      alert("Schedule added to favorites!");
      // Optionally re-fetch favorites here
    } catch (error) {
      console.error("Failed to add favorite:", error);
      alert("Error adding favorite. Try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <div id="allschedules">
        <h1>All Schedules</h1>
        <div className="schedules-container">
          {loading ? (
            <p>Loading schedules...</p>
          ) : schedules.length === 0 ? (
            <p>No schedules available.</p>
          ) : (
            schedules.map((item) => (
              <div
                key={item._id}
                className={`schedules ${getStatusClass(item.status)}`}
              >
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
                  <b>Professor:</b> {item.professor}
                </p>
                <p>
                  <b>Room:</b> {item.room}
                </p>
                <div className="schedule-buttons">{renderButtons(item)}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
