import React from "react";
import MainLayout from "../components/MainLayout";
import Productos from "../pages/Productos";
import Ventas from "../pages/Ventas";

export const ROUTES = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Productos />,
      },
      {
        path: "productos",
        element: <Productos />,
      },
      {
        path: "ventas",
        element: <Ventas />,
      },
      { path: "adminpage",
        element: <AdminDashboard />
      }
    ],
  },
];
