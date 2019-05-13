import React from 'react';
import './styles/PokeCell.css';

const PokeCell = props => {
    return (
        <button 
            className="poke-cell"
            onClick={props.handleClick}
            value={props.value}
        >
            <img 
                className="poke-sprite"
                src={require(`../Pokemon/${props.pokemonSprite}.png`)} 
                alt={props.value}
            />
            <p className="poke-name">
                <strong>{props.pokemonName}</strong>
            </p>
        </button>
    )
}

export default PokeCell;