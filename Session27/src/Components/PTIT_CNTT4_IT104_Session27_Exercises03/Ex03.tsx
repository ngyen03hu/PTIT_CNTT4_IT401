// src/Ex03.js
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import TaskList from "./Task_List";
import TaskDetail from "./Task_Detail";

export default function Ex03() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TaskList />,
    },
    {
      path: "/task/:id",
      element: <TaskDetail />,
    },
    {
      path: "*",
      element: <Navigate to="/" />, // redirect nếu nhập sai URL
    },
  ]);

  return <RouterProvider router={router} />;
}
