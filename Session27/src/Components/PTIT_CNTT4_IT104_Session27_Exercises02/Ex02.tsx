import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";


export default function Ex02() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/products" />, // ✅ Redirect
        },
        {
            path: "/products",
            element: <ProductList />,
        },
        {
            path: "/products/:id",
            element: <ProductDetail />,
        },
    ]);

    return <RouterProvider router={router} />;
}
