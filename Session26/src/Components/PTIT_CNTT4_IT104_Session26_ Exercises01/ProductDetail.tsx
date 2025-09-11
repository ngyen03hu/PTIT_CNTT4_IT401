import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h2>Chi tiết sản phẩm</h2>
            <p>ID sản phẩm: {id}</p>
        </div>
    );
}
