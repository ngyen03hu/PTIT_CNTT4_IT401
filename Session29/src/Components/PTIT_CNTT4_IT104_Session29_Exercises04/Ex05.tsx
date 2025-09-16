import React, { useEffect } from "react";
import { getStudentById } from "./getStudentById";

export default function Ex05() {
    useEffect(() => {
        getStudentById(5);
    }, []);
    return <div></div>;
}