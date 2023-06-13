import { createBrowserRouter } from "react-router-dom";
import { HomePage, NavBar } from "./index.ts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/home",
          element: <HomePage />
        },
      ]
    }
]);

export default router;