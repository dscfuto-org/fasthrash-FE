import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";
import Welcome from "./pages/Welcome";
import Login, { action as LoginAction } from "./pages/login";
import Signup, { action as SignupAction } from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import { logout as Logout } from "./Auth/logout";
import { checkToken as tokenLoader } from "./Auth/getToken";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import { loader as dashboardLoader } from "./util/dashboard";

// This can be imported by anyone throughout the app instead of having to declare the color or site name in all files...
// For example, I imported it in the ErrorPage.js file
// And to change the color, we only have to change this constant value here...
export const THEME_COLOR = "#7F56D9";
export const SITE_NAME = "FAST TRASH";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    id: "root",
    loader: tokenLoader,
    errorElement: <Error />,
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
        action: LoginAction,
      },
      {
        path: "logout",
        loader: Logout,
      },
      {
        path: "Signup",
        element: <Signup />,
        action: SignupAction,
      },
      {
        path: "dashboard/:profile",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
