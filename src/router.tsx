import { Layout } from "@/components";
import { createBrowserRouter } from "react-router-dom";
import { NotFound, HomePage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contacts",
        element: <div>Contacts</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <div>Sign up</div>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
