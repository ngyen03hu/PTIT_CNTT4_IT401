import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ex01 from "./Components/PTIT_CNTT4_IT104_Session26_ Exercises01/Ex01";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>Demo Router trong App.tsx</h1>
        <nav>
          <ul>
            <li><Link to="/product/1/AoThun">Xem sản phẩm 1 - Áo thun</Link></li>
            <li><Link to="/product/2/QuanJean">Xem sản phẩm 2 - Quần jean</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Trang Home */}
          <Route path="/" element={<h2>Trang Home</h2>} />

          {/* Route tới Ex01 */}
          <Route path="/product/:id/:name" element={<Ex01 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
