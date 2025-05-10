import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams

const Faculty = () => {
  const { facultyid } = useParams(); // Get facultyId from URL
  const [course, setCourse] = useState("");
  const [code, setCode] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [professor, setProfessor] = useState(""); // Professor name input
  const [room, setRoom] = useState("101"); // Default room or could be an input

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for the request
    const scheduleData = {
      course,
      code,
      time,
      status,
      room, // Room is set to a default value or could be an input
      professor, // Professor name can be entered manually or automatically populated
      professorId: facultyid, // Use the facultyId from the URL
    };

    try {
      // Send the data to the server
      const response = await axios.post(
        "http://localhost:8000/api/createSchedule",
        scheduleData
      );

      if (response.status === 200) {
        console.log("Schedule added successfully:", response.data);
        // Reset form fields if successful
        setCourse("");
        setCode("");
        setTime("");
        setStatus("");
        setProfessor("");
        setRoom("101"); // Reset room field
      }
    } catch (error) {
      console.error("Error adding schedule:", error);
    }
  };

  return (
    <div className="faculty-schedule-form">
      <h1>Add a Schedule</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Code (4 digits)"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          pattern="\d{4}" // Ensure only 4 digits are entered
        />
        <input
          type="text"
          placeholder="Time (e.g. 14:00 - 15:00)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Status (ongoing/upcoming/cancelled)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Professor Name"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
          required
        />
        {/* Optionally, you can show the professorId as a read-only field */}
        <input
          type="text"
          value={facultyid} // Read-only field showing the faculty's ID
          readOnly
        />
        <button type="submit">Add Schedule</button>
      </form>
    </div>
  );
};

export default Faculty;
