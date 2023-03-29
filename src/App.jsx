
import './App.css'
import MyTitle from './components/MyTitle';
import PropTypes from "prop-types";
// import PokemonCard from './components/PokemonCard';


function App() {
  const pokemonList = [

    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "mew",
    },
  ];

  return (

    <div>
      <PokemonCard pokemon={pokemonList[0]} />
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
