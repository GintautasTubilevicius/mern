import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {

    if (!links.length) {
        return <p className="center">Nuorodu kol kas nera</p>
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Nr</th>
                    <th>Originali</th>
                    <th>Sutrumpinta</th>
                    <th>Atidaryti</th>
                </tr>
            </thead>

            <tbody>
                {links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/detail/${link._id}`}>Atidaryti</Link>
                            </td>
                        </tr>
                    )
                })}


            </tbody>
        </table>
    )
}