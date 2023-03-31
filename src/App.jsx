
import './App.css'
import MyTitle from './components/MyTitle';
import PropTypes from "prop-types";
import { useState } from 'react';
import PokemonCard from './components/PokemonCard';

import NavBar from './components/Navbar';

function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },

    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },

    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },

    {
      name: "Mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)


  return (
    <div>
      <MyTitle />
      <NavBar index={pokemonIndex} setter={setPokemonIndex} list={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    </div>
  );
}

export default App
