import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Chi tiết sản phẩm</h1>
            <p>ID sản phẩm là: <strong>{id}</strong></p>
        </div>
    );
}
