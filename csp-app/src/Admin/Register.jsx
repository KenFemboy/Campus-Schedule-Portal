import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [student, setStudent] = useState({
    fullname: "",
    id: "",
    email: "",
    password: "",
  });

  const [faculty, setFaculty] = useState({
    fullname: "",
    id: "",
    email: "",
    password: "",
  });

  const handleStudentRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://campus-schedule-portal.onrender.com/api/createStudent",
        student
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Student registration failed.");
    }
  };

  const handleFacultyRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://campus-schedule-portal.onrender.com/api/createFaculty",
        faculty
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Faculty registration failed.");
    }
  };

  return (
    <div>
      <h3 id="hd3">Class Schedule Portal Registration</h3>

      <div id="container">
        {/* Student Registration */}
        <div className="register-student">
          <img src="/svg/student.svg" alt="Student Icon" />
          <h3>Student Sign Up</h3>

          <form onSubmit={handleStudentRegister}>
            <input
              type="text"
              placeholder="Full Name"
              pattern="^[A-Za-z0-9 ]+$"
              title="Full name can contain only letters, numbers, and spaces (no special characters)."
              value={student.fullname}
              onChange={(e) =>
                setStudent({ ...student, fullname: e.target.value })
              }
              required
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              placeholder="Student ID (6 digits)"
              title="Student ID must be exactly 6 digits"
              value={student.id}
              onChange={(e) => setStudent({ ...student, id: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              pattern="^[a-zA-Z]+\.[a-zA-Z]+\.\d{6}\.tc@umindanao\.edu\.ph$"
              title="Email must be in the format: firstname.lastname.123456.tc@umindanao.edu.ph"
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              pattern="^[A-Za-z0-9]+$"
              title="Password must contain only letters and numbers (no spaces or special characters)"
              value={student.password}
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Faculty Registration */}
        <div className="register-faculty">
          <img src="/svg/faculty.svg" alt="Faculty Icon" />
          <h3>Faculty Sign Up</h3>

          <form onSubmit={handleFacultyRegister}>
            <input
              type="text"
              placeholder="Full Name"
              pattern="^[A-Za-z0-9 ]+$"
              title="Full name can contain only letters, numbers, and spaces (no special characters)."
              value={faculty.fullname}
              onChange={(e) =>
                setFaculty({ ...faculty, fullname: e.target.value })
              }
              required
            />
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              placeholder="Faculty ID (6 digits)"
              title="Faculty ID must be exactly 6 digits"
              value={faculty.id}
              onChange={(e) => setFaculty({ ...faculty, id: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              pattern="^[a-zA-Z0-9]+@umindanao\.edu\.ph$"
              title="Email must only contain letters and numbers before @umindanao.edu.ph"
              value={faculty.email}
              onChange={(e) =>
                setFaculty({ ...faculty, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              pattern="^[A-Za-z0-9]+$"
              title="Password must contain only letters and numbers (no spaces or special characters)"
              value={faculty.password}
              onChange={(e) =>
                setFaculty({ ...faculty, password: e.target.value })
              }
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
