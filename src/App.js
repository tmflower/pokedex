import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokecards from './pokecards.js'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokecards={pokecards} />
    </div>
  );
}

export default App;
