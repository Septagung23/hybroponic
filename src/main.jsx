import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Root from "./root";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/history",
            element: <History />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
