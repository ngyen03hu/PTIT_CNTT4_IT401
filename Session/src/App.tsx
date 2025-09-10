import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './assets/page/about'
import Contatc from './assets/page/Contatc'
import NotFound from './assets/page/NotFound'
import Admin from './layout/Admin'
import UserMAnger from './assets/page/UserMAnger'
import Produc from './assets/page/Produc'
import Ordrer from './assets/page/Ordrer'
import Login from './assets/page/Login'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/about",
      element: <About></About>

    },
    {
      path: "/contatc",
      element: <Contatc></Contatc>
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/admin",
      element: <Admin></Admin>,
      children: [
        {
          path: "user",
          element: <UserMAnger></UserMAnger>
        },
        {
          path: "produc",
          element: <Produc></Produc>
        },
        {
          path: "oder",
          element: <Ordrer></Ordrer>
        }
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
