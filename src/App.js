import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";
import Welcome from "./pages/Welcome";
import Login from "./pages/login";
import Signup from "./pages/Signup";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        path: "welcome",
        element: <Welcome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
