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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
      },

    {
        path: "/error-page",
        element: <ErrorPage />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
