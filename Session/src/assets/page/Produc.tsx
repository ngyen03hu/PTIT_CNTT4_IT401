import React, { use, useState } from 'react'
const data = [
    {
        id: 1,
        name: "ip15",
        price: 53221,
    },
    {
        id: 2,
        name: "ip18",
        price: 53221,
    }

]
export default function Produc() {
    const [produc, setProduc] = useState<any>(data);
    return (
        <div>
            <h1>Trang quan ly san pham </h1>
            <table>
                <thead>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>Gia</th>
                    <th>Hanh dong </th>
                </thead>
                <tbody>
                    {produc.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button>xem chi tiet</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
