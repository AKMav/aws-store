import { Layout } from "@/components";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Some error</div>,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
