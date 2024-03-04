import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import HomePage from "./routes/HomePage";
import AddSeminar from "./routes/AddSeminar";
import SeminarCards from "./components/SeminarCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "add-seminar",
        element: <AddSeminar />,
      },
      {
        path: "seminar-cards",
        element: <SeminarCards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
