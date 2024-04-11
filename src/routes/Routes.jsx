import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Terms from "../components/Terms/Terms";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import BlogDetails from "../pages/BlogDetails";
import SingleEstate from "../components/SingleEstate/SingleEstate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BlogDetails />,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
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
        path: "/p",
        element: <SingleEstate />,
      },
    ],
  },
]);

export default router;
