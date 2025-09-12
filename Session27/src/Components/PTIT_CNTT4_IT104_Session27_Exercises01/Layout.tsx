import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='text-center h-1 text-teal-500 gap[20]'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Outlet />
        </div>
    )
}
