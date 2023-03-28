
import './App.css'
import MyTitle from './components/MyTitle';
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

export default App
