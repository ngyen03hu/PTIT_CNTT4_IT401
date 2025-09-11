import { useParams } from "react-router-dom";

export default function Ex01() {
    // useParams trả về object, ta khai báo type để dễ làm việc
    const { id, name } = useParams<{ id: string; name: string }>();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Ví dụ Ex01</h1>
            <p>ID sản phẩm: <strong>{id}</strong></p>
            <p>Tên sản phẩm: <strong>{name}</strong></p>
        </div>
    );
}
