
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


  return (
    <div>

      <NavBar index={pokemonIndex} setter={setPokemonIndex} list={pokemonList} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    </div>
  );
}

function PokemonCard(props) {
  return <figure className='myImg' >
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

function NavBar(props) {
  const { index, setter, list } = props

  return (
    <>
      <Precedent precedent={index > 0 ? true : false} setter={setter} index={index} />
      <Next next={index < list.length - 1 ? true : false} setter={setter} index={index} />
    </>


  )
}




function Next(props) {
  const { index, setter, next } = props
  const handleClickNext = () => {
    setter(index + 1)
  }
  if (next) {
    return <button onClick={handleClickNext}>Suivant</button>
  }
}

function Precedent(props) {
  const { index, setter, precedent } = props
  const handleClickPrecedent = () => {
    setter(index - 1)
  }
  if (precedent) {
    return <button onClick={handleClickPrecedent}>Précédent</button>
  }
}


export default App
