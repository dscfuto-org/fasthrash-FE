import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";
import Welcome from "./pages/Welcome";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import ErrorPage from './pages/ErrorPage';

// This can be imported by anyone throughout the app instead of having to declare the color or site name in all files...
// For example, I imported it in the ErrorPage.js file
// And to change the color, we only have to change this constant value here...
export const THEME_COLOR = '#7F56D9'; 
export const SITE_NAME = 'FAST TRASH'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Welcome />,
      },
      {
        path: "*",
        element: <ErrorPage />, //This is the page for all 404 routes on this website!
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
