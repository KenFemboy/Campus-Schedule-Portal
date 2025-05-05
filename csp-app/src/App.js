import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Student from "./Student/Student";
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
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
