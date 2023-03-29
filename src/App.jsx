
import './App.css'
import MyTitle from './components/MyTitle';
import PropTypes from "prop-types";
import { useState } from 'react';
// import PokemonCard from './components/PokemonCard';


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

    },

    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

    },

    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

    },

    {
      name: "mew",
    },

  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex(pokemonIndex + 1)
  }
  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }

  }

  return (
    <div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        <button onClick={handleClickPrecedent}>Précédent</button>
        <button onClick={handleClickNext}>Suivant</button>

      </div>
    </div>
  );
}

function PokemonCard(props) {
  return <figure>
    <img src={props.pokemon.imgSrc} alt="???" />
    <figcaption>{props.pokemon.name}</figcaption>
  </figure>
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string
  })
}

export default App
