import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
