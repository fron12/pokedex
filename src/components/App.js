import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';

import PokeList from '../components/PokeList';
import DetailView from '../components/DetailView';
import Pokemon from '../Pokemon';

class App extends Component {
  state = {
    pokemonUrl: 'http://pokeapi.co/api/v2/pokemon?offset0&limit=807',
    pokemon: []
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios
    .get(this.state.pokemonUrl)
    .then(res => {
      this.setState({ pokemon: res.data.results })
      console.log(res.data.results);
    })
    .catch(err => console.log('Error: ', err))
  }

  // handleClick(id) {
  //   fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
  //   .then(res => res.json())
  //   .then(data => {
  //     const pokemon = new Pokemon(data);

  //     this.setState({ pokemon });
  //   })
  //   .catch(err => console.log(err));
  // }

  render(){
    return (
      <div className="App">
        <PokeList 
          handleClick={this.handleClick}
          pokemon={this.state.pokemon} 
        />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
