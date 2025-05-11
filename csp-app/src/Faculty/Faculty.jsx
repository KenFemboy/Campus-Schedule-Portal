import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Faculty.css";

const Faculty = () => {
  const { facultyid } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/schedules/${facultyid}`
      );
      setSchedules(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching schedules:", error);
      setLoading(false);
    }
  };

  const handleCancel = async (scheduleCode) => {
    try {
      await axios.put(
        `http://localhost:8000/api/schedules/${scheduleCode}/cancel`
      );
      fetchSchedules(); // Refresh after cancellation
    } catch (error) {
      console.error("Error cancelling schedule:", error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "ongoing":
        return "ongoing";
      case "upcoming":
        return "upcoming";
      case "cancelled":
        return "cancelled";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (facultyid) {
      fetchSchedules();
    }
  }, [facultyid]);

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
                key={item.code}
                className={`schedules ${getStatusClass(item.status)}`}
              >
                <p>
                  <b>Course:</b> {item.course}
                </p>
                <p>
                  <b>Code:</b> {item.code}
                </p>
                <p>
                  <b>Time:</b>{" "}
                  {new Date(item.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(item.endTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
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

                {item.status === "upcoming" && (
                  <button onClick={() => handleCancel(item.code)}>
                    Cancel
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
