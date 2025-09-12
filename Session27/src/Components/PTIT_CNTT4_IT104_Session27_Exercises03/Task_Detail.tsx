// src/pages/TaskDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tasks from "../PTIT_CNTT4_IT104_Session27_Exercises03/dataTasks";

export default function TaskDetail() {
    const { id } = useParams(); // lấy id từ URL
    const navigate = useNavigate(); // dùng để quay lại
    const task = tasks.find((t) => t.id === Number(id));

    if (!task) {
        return <h2>Công việc không tồn tại.</h2>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p><b>Mô tả:</b> {task.description}</p>
            <p><b>Chi tiết:</b> {task.detail}</p>

            {/* Nút quay lại */}
            <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
    );
}
