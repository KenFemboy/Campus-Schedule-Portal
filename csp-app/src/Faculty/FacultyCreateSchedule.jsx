import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Faculty.css";

const FacultyCreateSchedule = () => {
  const { facultyid } = useParams(); // Get facultyId from URL
  const [course, setCourse] = useState("");
  const [code, setCode] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [professor, setProfessor] = useState("");
  const [room, setRoom] = useState("101");

  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch schedules for this faculty
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

  // Assign class based on status
  const getStatusClass = (status) => {
    switch (status) {
      case "ongoing":
        return "ongoing-status";
      case "upcoming":
        return "upcoming-status";
      case "cancelled":
        return "cancelled-status";
      default:
        return "";
    }
  };

  // Fetch professor name
  useEffect(() => {
    const fetchProfessorName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/faculty/${facultyid}/fullname`
        );
        setProfessor(response.data.fullname);
      } catch (error) {
        console.error("Error fetching professor name:", error);
      }
    };

    if (facultyid) {
      fetchProfessorName();
      fetchSchedules();
    }
  }, [facultyid]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const diffMinutes = (end - start) / (1000 * 60);

    if (start >= end) {
      alert("Start time must be earlier than end time.");
      return;
    }

    // Auto-generate status
    const now = new Date();
    const todayDate = now.toISOString().split("T")[0];
    const startDateTime = new Date(`${todayDate}T${startTime}:00`);
    const endDateTime = new Date(`${todayDate}T${endTime}:00`);

    let computedStatus = "upcoming";

    const scheduleData = {
      course,
      code,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      status: computedStatus,
      room,
      professor,
      professorId: facultyid,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/createSchedule",
        scheduleData
      );

      if (response.status === 200) {
        console.log("Schedule added successfully:", response.data);
        setCourse("");
        setCode("");
        setStartTime("");
        setEndTime("");
        setRoom("101");
        fetchSchedules(); // Refresh list
      }
    } catch (error) {
      console.error("Error adding schedule:", error);
      alert(
        error?.response?.data?.message ||
          "Failed to add schedule. Check for time conflicts."
      );
    }
  };

  return (
    <div className="faculty-schedule-form">
      <h1>Add a Schedule</h1>
      <form onSubmit={handleSubmit}>
        <label>Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="IT">IT</option>
          <option value="CS">CS</option>
          <option value="Engineering">Engineering</option>
        </select>

        <input
          type="text"
          placeholder="Code (4 digits)"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          pattern="\d{4}"
          maxLength={4}
        />

        <label>Time Range (30-minute intervals from 7:00 AM - 10:00 PM)</label>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="time"
            min="07:00"
            max="22:00"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <span>to</span>
          <input
            type="time"
            min="07:00"
            max="22:00"
            step="1800"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <label>Room</label>
        <select value={room} onChange={(e) => setRoom(e.target.value)} required>
          <option value="">Select Room</option>
          <option value="101">101</option>
          <option value="102">102</option>
          <option value="103">103</option>
          <option value="104">104</option>
        </select>

        <input
          type="text"
          placeholder="Professor Name"
          value={professor}
          readOnly
        />
        <input type="text" value={facultyid} readOnly />
        <button type="submit">Add Schedule</button>
      </form>
    </div>
  );
};

export default FacultyCreateSchedule;
