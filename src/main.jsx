import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import System from "./pages/System";
import History from "./pages/History";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AddSystem from "./pages/AddSystem";
import Dashboard from "./pages/Dashboard";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Root from "./root";
import EditSystem from "./pages/EditSystem";

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
            element: <System />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/history",
            element: <History />,
          },
          {
            path: "/system",
            element: <AddSystem />,
          },
          { path: "/editSystem", element: <EditSystem /> },
          {
            path: "/profile",
            element: <Profile />,
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
