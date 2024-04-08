import { createBrowserRouter } from "react-router-dom";
import { NotFound, HomePage } from "@/pages";
import { App } from "./App";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Suspense><HomePage /></Suspense>,
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
        element: <Suspense><NotFound /></Suspense>,
      },
    ],
  },
]);
