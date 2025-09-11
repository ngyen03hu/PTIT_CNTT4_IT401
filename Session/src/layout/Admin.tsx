import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            trang admin
            <br />
            <NavLink to="/admin/produc">quan ly san pham </NavLink><br />
            <NavLink to="/admin/oder">Quan ly hao don </NavLink>
            <header>

            </header>
            <Outlet></Outlet>
            <footer>chan trang</footer>
        </div>
    )
}
