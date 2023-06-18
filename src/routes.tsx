import { createBrowserRouter } from "react-router-dom";
import {
  BlogPage,
  GamesPage,
  HomePage,
  NavBar,
  ProjectsPage,
  RecipesPage,
} from "./index.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/games",
          element: <GamesPage />,
        },
        {
          path: "/recipes",
          element: <RecipesPage />,
        },
      ],
    },
  ],
  {
    basename: "/personal-website/",
  }
);

export default router;
