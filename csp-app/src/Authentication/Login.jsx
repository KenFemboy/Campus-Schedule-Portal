import "./Login.css";
import NavBar from "../Components/NavBar";

import StudentLogin from "./StudentLogin";
import FacultyLogin from "./FacultyLogin";

const Login = () => {
  return (
    <div>
      <div id="loginContainer">
        <StudentLogin />
        <FacultyLogin />
      </div>
    </div>
  );
};

export default Login;
