import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Seminer from "./components/Seminer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
      },

    {
        path: "/error-page",
        element: <ErrorPage />,
      },

      {
        path: "/home",
        element: <Header />,
      },
      {
        path: "seminer",
        element: <Seminer/>,
      },
      
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
