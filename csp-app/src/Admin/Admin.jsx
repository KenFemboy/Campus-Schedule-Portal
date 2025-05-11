import React, { useEffect, useState } from "react";
import Register from "./Register.jsx";
import Announcements from "../Components/Announcements.jsx";
import MainPage from "../Mainpage/Mainpage.jsx";
import axios from "axios";
import "./Admin.css"; // Optional: for styling

const Admin = () => {
  const [students, setStudents] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all students and faculty
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [studentRes, facultyRes] = await Promise.all([
          axios.get("https://campus-schedule-portal.onrender.com/api/students"),
          axios.get("https://campus-schedule-portal.onrender.com/api/faculty"),
        ]);
        setStudents(studentRes.data);
        setFaculty(facultyRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Register />
      <Announcements />
      <MainPage />

      <div className="students">
        <h2>All Students</h2>
        {loading ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <ul>
            {students.map((student) => (
              <li key={student._id}>
                <strong>{student.fullname}</strong> — ID: {student.id} — Email:{" "}
                {student.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="faculty">
        <h2>All Faculty</h2>
        {loading ? (
          <p>Loading faculty...</p>
        ) : faculty.length === 0 ? (
          <p>No faculty found.</p>
        ) : (
          <ul>
            {faculty.map((member) => (
              <li key={member._id}>
                <strong>{member.fullname}</strong> — ID: {member.id} — Email:{" "}
                {member.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Admin;
