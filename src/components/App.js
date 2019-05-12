import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";

import PokeList from "../components/PokeList";
import DetailView from "../components/DetailView";
import Pokemon from "../Pokemon";

class App extends Component {
  state = {
    pokemonListUrl: "https://pokeapi.co/api/v2/pokemon?offset0&limit=802",
    pokemonUrl: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: [],
    pokemonList: []
  };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    axios
      .get(this.state.pokemonListUrl)
      .then(res => {
        this.setState({ pokemonList: res.data.results });
        console.log(res.data.results);
      })
      .catch(err => console.log("Error: ", err));
  };

  handleClick = event => {
    axios
      .get(this.state.pokemonUrl + `${event.currentTarget.value}`)
      .then(res => {
        this.setState({ pokemon: new Pokemon(res.data) });
        console.log(this.state.pokemon);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <PokeList
          handleClick={this.handleClick}
          pokemonList={this.state.pokemonList}
        />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
