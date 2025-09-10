import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from '../PTIT_CNTT4_IT104_Session25_ Exercises04/Register'

export default function Ex10() {
    const router = createBrowserRouter([
        { path: '/', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/home', element: <Home></Home> },
    ])

    return <RouterProvider router={router} />
}