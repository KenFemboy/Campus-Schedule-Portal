import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
import Faculty from "./Faculty/Faculty";
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
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
