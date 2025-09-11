import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function UserMAnger() {
    const location = useLocation();
    useEffect(() => {
        // window.scrollTo(0,1243)

        const element = document.getElementById("scroll");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location])
    return (
        <div>
            trang quan lys may thang ngu
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, facilis perspiciatis. Nemo magnam quae officiis sed non accusantium nobis labore impedit unde, natus ut aliquam eaque? Assumenda fugit deleniti sed!
            <p id='scroll'>srco den elemant  mong muon</p>
        </div>
    )
}
