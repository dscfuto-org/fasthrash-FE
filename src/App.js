import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";
import Welcome from "./pages/Welcome";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
