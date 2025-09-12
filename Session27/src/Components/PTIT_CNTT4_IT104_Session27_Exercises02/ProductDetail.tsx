// src/pages/ProductDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../PTIT_CNTT4_IT104_Session27_Exercises02/Data";

export default function ProductDetail() {
    const { id } = useParams(); // lấy id từ URL
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div>
                <h2 >Sản phẩm không tồn tại.</h2>
                <Link to="/products">Quay lại danh sách</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} width="200" />
            <p><b>Giá:</b> {product.price}</p>
            <p>{product.detail}</p>
            <Link to="/products">⬅ Quay lại danh sách</Link>
        </div>
    );
}
