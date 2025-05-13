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
import Error from "./Components/Error";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Mainpage />
          <Announcements />
          <Footer />
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
      element: (
        <>
          <NavBar />
          <Announcements />
          <Footer />
        </>
      ),
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "*",
      element: (
        <>
          <NavBar />
          <Error />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
