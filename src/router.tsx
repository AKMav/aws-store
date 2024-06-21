import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  HomePage,
  BuyerCart,
  Wishlist,
  ContactUs,
  Product,
  LogIn,
  Profile,
  ProceedCheckout,
} from "@/pages";
import { Routes, RouteParams } from "./routes";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: Routes.Home,
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
        path: Routes.Cart,
        element: (
          <Suspense>
            <BuyerCart />
          </Suspense>
        ),
      },
      {
        path: `${Routes.Products}/:${RouteParams.ProductId}`,
        element: (
          <Suspense>
            <Product />
          </Suspense>
        ),
      },
      {
        path: Routes.Wishlist,
        element: (
          <Suspense>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: Routes.Contact,
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: Routes.Login,
        element: (
          <Suspense>
            <LogIn />
          </Suspense>
        ),
      },
      {
        path: Routes.Profile,
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: Routes.ProceedCheckout,
        element: (
          <Suspense>
            <ProceedCheckout />
          </Suspense>
        ),
      },
      {
        path: Routes.NotFound,
        element: (
          <Suspense>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
