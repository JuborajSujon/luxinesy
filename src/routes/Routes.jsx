import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Terms from "../components/Terms/Terms";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://juborajsujon.github.io/personal-project-api/ph9estate.json"
          ),
      },
      {
        path: "/profile",
        element: <UpdateProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/blogdetails:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
