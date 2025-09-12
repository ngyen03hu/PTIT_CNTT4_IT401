// src/pages/TaskList.js
import React from "react";
import { Link } from "react-router-dom";
import tasks from "../PTIT_CNTT4_IT104_Session27_Exercises03/dataTasks";

export default function TaskList() {
    return (
        <div>
            <h1>Danh sách công việc</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: "15px" }}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
