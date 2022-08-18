import React from "react";
import Pokecard from "./Pokecard";

/** First option is according to instructions, listing Pokecards in App with defaultProps */

const Pokedex = ({id, name, img, type, experience}) => {
    return (
        <div className="Pokedex">
            <Pokecard id="4" name="Charmander" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" type="fire" experience="62" />
            <Pokecard id="7" name="Squirtle" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" type="water" experience="6" />
            <Pokecard id="11" name="Metapod" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" type="bug" experience="72" />
            <Pokecard id="12" name="Butterfree" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" type="flying" experience="178" />
            <Pokecard id="25" name="Pikachu" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" type="electric" experience="112" />
            <Pokecard id="39" name="Jigglypuff" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" type="normal" experience="95" />
            <Pokecard id="94" name="Gengar" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" type="poison" experience="225" />
            <Pokecard id="133" name="Eevee" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" type="normal" experience="65" />
        </div>
    )
}

/** This option uses the pokecards.js file and returns an array using map method; the result is the same */

// const Pokedex = ({ pokecards }) => {
//     return (
//         <div>
//         {pokecards.map(p => (
//             <Pokecard key={p.id} name={p.name} image={p.img} type={p.type} experience={p.experience}/>
//         ))}
//         </div>
//     )
// }

export default Pokedex;