import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
