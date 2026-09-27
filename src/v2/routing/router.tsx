import { createHashRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import { paths } from "./paths";

export const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PageLayout />,
        children: [
          { path: paths.experience, element: <Experience /> },
          { path: paths.education, element: <Education /> },
          { path: paths.projects, element: <Projects /> },
        ],
      },
      { path: "*", element: <Navigate to={paths.home} replace /> },
    ],
  },
]);
