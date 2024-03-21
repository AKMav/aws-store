import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Some error</div>,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
