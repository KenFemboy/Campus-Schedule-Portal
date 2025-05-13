import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Faculty.css";

const Faculty = () => {
  const { facultyid } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteButtons, setShowDeleteButtons] = useState(false); // 👈 New state

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
      fetchSchedules();
    } catch (error) {
      console.error("Error cancelling schedule:", error);
    }
  };

  const handleMakeUpcoming = async (scheduleCode) => {
    try {
      await axios.put(
        `http://localhost:8000/api/schedules/${scheduleCode}/upcoming`
      );
      fetchSchedules();
    } catch (error) {
      console.error("Error updating schedule to upcoming:", error);
    }
  };

  const handleMakeOngoing = async (scheduleCode) => {
    try {
      await axios.put(
        `http://localhost:8000/api/schedules/${scheduleCode}/ongoing`
      );
      fetchSchedules();
    } catch (error) {
      console.error("Error updating schedule to ongoing:", error);
    }
  };

  const handleDelete = async (scheduleCode) => {
    try {
      await axios.delete(`http://localhost:8000/api/schedules/${scheduleCode}`);
      fetchSchedules();
    } catch (error) {
      console.error("Error deleting schedule:", error);
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
    <div id="faculty">
      <div id="allschedules">
        <h1>All Schedules</h1>
        <button
          className="deleteSchedules"
          onClick={() => setShowDeleteButtons(!showDeleteButtons)} // 👈 Toggle button
        >
          {showDeleteButtons ? "Hide" : "Delete Schedules"}
        </button>

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

                <div className="button-group">
                  {item.status === "upcoming" && (
                    <>
                      <button
                        onClick={() => handleCancel(item.code)}
                        style={{
                          backgroundColor: "darkred",
                          color: "white",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleMakeOngoing(item.code)}
                        style={{
                          backgroundColor: "rgb(63, 116, 63)",
                          color: "black",
                        }}
                      >
                        Make Ongoing
                      </button>
                    </>
                  )}
                  {item.status === "ongoing" && (
                    <>
                      <button
                        onClick={() => handleCancel(item.code)}
                        style={{
                          backgroundColor: "darkred",
                          color: "white",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleMakeUpcoming(item.code)}
                        style={{
                          backgroundColor: "rgb(229, 229, 59)",
                          color: "black",
                        }}
                      >
                        Make Upcoming
                      </button>
                    </>
                  )}
                  {item.status === "cancelled" && (
                    <button
                      onClick={() => handleMakeUpcoming(item.code)}
                      style={{
                        backgroundColor: "rgb(229, 229, 59)",
                        color: "black",
                      }}
                    >
                      Make Upcoming
                    </button>
                  )}
                </div>

                {/* 👇 Conditionally rendered Delete button */}
                {showDeleteButtons && (
                  <button
                    onClick={() => handleDelete(item.code)}
                    style={{
                      backgroundColor: "darkred",
                      color: "white",
                      marginTop: "0.5rem",
                    }}
                  >
                    Delete
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
