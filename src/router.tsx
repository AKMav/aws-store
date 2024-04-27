import { createBrowserRouter } from "react-router-dom";
import { NotFound, HomePage, BuyerCart } from "@/pages";
import { App } from "./App";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense>
            <BuyerCart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
