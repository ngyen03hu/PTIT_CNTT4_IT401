// src/pages/ProductList.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../PTIT_CNTT4_IT104_Session27_Exercises02/Data"

export default function ProductList() {
    return (
        <div>
            <h1 className="text-center flex text-blue-500">Danh sách sản phẩm</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.id} style={{ marginBottom: "20px" }}>
                        <h3>{p.name}</h3>
                        <p>Giá: {p.price}</p>
                        <p>{p.description}</p>
                        <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
