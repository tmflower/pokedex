import Pokedex from './Pokedex';
import pokecards from './pokecards';

let total1 = 0;
let total2 = 0;
let winner;
const Pokegame = () => { 
    const hand1 = [];
    const hand2 = [];
    for (let i=0; i<pokecards.length; i++) {
        let cardNum = Math.floor(Math.random() * 2 + 1);

        if ((cardNum === 1 && hand1.length < 4) || hand2.length === 4) {
            hand1.push(pokecards[i]);
            let card = pokecards[i];
            let exp = card.base_experience;
            total1 += exp;
        }
        else if ((cardNum === 2 && hand2.length < 4) || hand1.length === 4){
            hand2.push(pokecards[i]);
            let card = pokecards[i];
            let exp = card.base_experience;
            total2 += exp;
        }
        winner = Math.max(total1, total2);
    }
    return (
        <div>
            <h2>Player 1</h2>
            <h3>Total EXP: {total1}</h3>
            <Pokedex pokecards={hand1} total={total1} isWinner={winner}/>            
            <h2>Player 2</h2>
            <h3>Total EXP: {total2} </h3>
            <Pokedex pokecards={hand2} total={total2} isWinner={winner}/>            
        </div>
    )
}

export default Pokegame;