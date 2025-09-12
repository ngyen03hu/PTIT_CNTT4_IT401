import { Link } from "react-router-dom";

export default function Home01() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Trang Home</h1>
            <p>Chọn sản phẩm để xem chi tiết:</p>
            <ul>
                <li><Link to="/product/12">Sản phẩm 12</Link></li>
                <li><Link to="/product/abc123">Sản phẩm abc123</Link></li>
            </ul>
        </div>
    );
}
