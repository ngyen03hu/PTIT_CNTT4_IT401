import axios from 'axios';
import React, { useState } from 'react'

export default function Uploadimage() {
    const [image, setimge] = useState<string>("");
    const [url, setUrl] = useState<string | null>(null)
    const handleChange = (e: any) => {
        console.log("gia tri e ", e.target.flies[0]);
        setimge(e.target.flies[0])

    }
    const saveImge = async () => {
        if (image === "") return;
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_NAME), /// ten du dan 
            formData.append('cloud_name', import.meta.env.VITE_PROJECT_NAME); // ten cloud naem 
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dnh4iyhd6/image/upload", formData);
            console.log(response);
            setUrl(response.data.secure_url)
        } catch (error) {
            console.log(error);
        }
        <thead>
            <tr>
                <th>STT</th>
                <th>Ten</th>
                <th>anh</th>
            </tr>
        </thead>
        return (
            <div>
                <h1>up anh len </h1>
                <input type="flie" />
                <button onClick={saveImge}>Luu</button>
                <h1>anh sau khi da Luu </h1>
            </div>
        )
    }
}
