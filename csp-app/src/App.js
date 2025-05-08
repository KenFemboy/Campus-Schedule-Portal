import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
import Faculty from "./Faculty/Faculty";
import NavBar from "./Components/NavBar";
import Announcements from "./Components/Announcements";
import Footer from "./Components/Footer";
import Login from "./Authentication/Login";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage />,
    },
    {
      path: "/student",
      element: <Student />,
    },
    {
      path: "/faculty",
      element: <Faculty />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
      <Announcements />
      <Footer />
    </div>
  );
}

export default App;
