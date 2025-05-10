import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
import Faculty from "./Faculty/Faculty";

import Announcements from "./Components/Announcements";
import Footer from "./Components/Footer";
import Login from "./Authentication/Login";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
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
      path: "/faculty",
      element: <Faculty />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/announcements",
      element: <Announcements />,
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
