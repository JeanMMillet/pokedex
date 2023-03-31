import PropTypes from "prop-types";

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
export default PokemonCard;

