import React from "react";

const Pokecard = ({ name, type, image, experience }) => (
    <div className="Pokecard">
        <h5>{ name }</h5>
        <img src={ image }></img>
        <p>Type: { type }</p>
        <p>EXP: { experience }</p>
    </div>
);

export default Pokecard;