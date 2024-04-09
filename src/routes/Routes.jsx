import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
    ],
  },
]);

export default router;
