import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mainpage.css";

const Mainpage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

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

    return () => clearInterval(interval); // clean up when component unmounts
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

  return (
    <div>
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
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
