import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Session27/src/Components/PTIT_CNTT4_IT104_Session27_Exercises04/ProductList";
import ProductDetail from "./Session27/src/Components/PTIT_CNTT4_IT104_Session27_Exercises04/ProductDetail";
export default function Ex04() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/task/:id" element={<ProductDetail />} />
                </Routes>
            </Router>
        </div>
    )
}