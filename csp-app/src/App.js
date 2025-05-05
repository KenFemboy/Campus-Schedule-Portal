import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
import Faculty from "./Faculty/Faculty";
import NavBar from "./Components/NavBar";
import Announcements from "./Components/Announcements";
import Footer from "./Components/Footer";

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
  ]);
  return (
    <div>
      <NavBar />;
      <RouterProvider router={route} />
      <Announcements />
      <Footer />
    </div>
  );
}

export default App;
