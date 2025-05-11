import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
import Faculty from "./Faculty/Faculty";
import FacultyCreateSchedule from "./Faculty/FacultyCreateSchedule";
import Announcements from "./Components/Announcements";
import Footer from "./Components/Footer";
import Login from "./Authentication/Login";
import Admin from "./Admin/Admin";
import NavBar from "./Components/NavBar";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Mainpage />
          <Announcements />
        </>
      ),
    },
    {
      path: "/student/:studentid",
      element: (
        <>
          <Student />
          <Announcements />
        </>
      ),
    },
    {
      path: "/faculty/:facultyid",
      element: (
        <>
          <NavBar />
          <Faculty />
          <FacultyCreateSchedule />
          <Announcements />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/announcements",
      element: <Announcements />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
      <Footer />
    </div>
  );
}

export default App;
