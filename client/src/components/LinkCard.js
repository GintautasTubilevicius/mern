import React from "react";

export const LinkCard = ({link}) => {
    return (
        <>
        <h2>Nuoroda</h2>
        <p>Jusu nuoroda: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
        <p>Is kur: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        <p>Paspaudimu skaicius: <strong>{link.clicks}</strong></p>
        <p>Sukurimo data: <strong>{new Date(link.date).toLocaleDateString("en-CA")}</strong></p>
        </>
    )
}