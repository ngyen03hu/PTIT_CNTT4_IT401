import React, { useEffect } from 'react'
// // import Counter from './page/Counter'
// import Profile from './Components/PTIT_CNTT4_IT104_Session32_Exercises01/Profile'
// import ListUser from './Components/PTIT_CNTT4_IT104_Session32_Exercises02/ListUser'
// import Counter from "./Components/PTIT_CNTT4_IT104_Session32_Exercises03/Counter"
// import RandomNumber from './Components/PTIT_CNTT4_IT104_Session32_Exercises04/RandomNumber'
// import ChangeState from './Components/PTIT_CNTT4_IT104_Session32_Exercises05/ChangeState'
// import ThemeToggle from './Components/PTIT_CNTT4_IT104_Session32_Exercises06/ThemeToggle'
// import Register from './Components/PTIT_CNTT4_IT104_Session32_Exercises078/Register'
import Login from './Components/PTIT_CNTT4_IT104_Session32_Exercises078/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { RouterProvider } from 'react-router'
import type { RootState } from './store/store';
import { useSelector } from 'react-redux';

import './index.css';


export default function App() {
    const user = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        console.log('Thông tin người dùng đăng nhập:', user);
    }, [user]);

    return (
        <div>
            {/* <Counter /> */}
            {/* <Profile /> */}
            {/* <ListUser /> */}
            {/* <RandomNumber /> */}
            {/* <ChangeState /> */}
            {/* <ThemeToggle /> */}
            <BrowserRouter>
                <div className="p-4">
                    <nav className="flex gap-4 mb-6">
                        <Link to="/register" className="text-blue-600 underline">
                            Đăng ký
                        </Link>
                        <Link to="/login" className="text-blue-600 underline">
                            Đăng nhập
                        </Link>
                    </nav>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Register />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}