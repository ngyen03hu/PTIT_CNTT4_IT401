import React from 'react'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Ex01() {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },

            ],
        },


    ]);
    return (
        <div>
            <RouterProvider router={routers}></RouterProvider>
        </div>
    )
}
