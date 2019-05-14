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
    pokemonSpeciesUrl: "https://pokeapi.co/api/v2/pokemon-species/",
    pokemon: [],
    pokemonList: [],
    pokemonDescription: "",
    filteredPokemon: []
  };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    axios.get(this.state.pokemonListUrl).then(res => {
      this.setState({ pokemonList: res.data.results });
    });
    axios.get(this.state.pokemonUrl + "ditto").then(res => {
      this.setState({ pokemon: new Pokemon(res.data) });
    });
    axios.get(this.state.pokemonSpeciesUrl + "ditto").then(res => {
      const flavor_text_entries = res.data.flavor_text_entries;
      let englishText = flavor_text_entries.filter(text => {
        if (text.language.name === "en") {
          return text.flavor_text;
        }
        return null;
      });
      this.setState({
        pokemonDescription: englishText[0].flavor_text
      });
    });
  };

  handleClick = event => {
    axios
      .get(this.state.pokemonUrl + `${event.currentTarget.value}`)
      .then(res => {
        this.setState({ pokemon: new Pokemon(res.data) });
      });
    axios
      .get(this.state.pokemonSpeciesUrl + `${event.currentTarget.value}`)
      .then(res => {
        const flavor_text_entries = res.data.flavor_text_entries; // Is an array
        let englishText = flavor_text_entries.filter(text => {
          if (text.language.name === "en") {
            return text.flavor_text;
          }
          return null;
        });
        this.setState({
          pokemonDescription: englishText[0].flavor_text
        });
      });
  };

  handleChange = event => {
    console.log(event.target.value);
    const filterPokemon = this.state.pokemonList.filter(pokemon => {
      if (pokemon.name.includes(event.target.value)) {
        return pokemon;
      }
      return null;
    });
    this.setState({ filteredPokemon: filterPokemon });
  };

  render() {
    return (
      <div className="App">
        <PokeList
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          pokemonList={
            this.state.filteredPokemon.length > 0
              ? this.state.filteredPokemon
              : this.state.pokemonList
          }
        />
        <DetailView
          pokemon={this.state.pokemon}
          description={this.state.pokemonDescription}
        />
      </div>
    );
  }
}

export default App;
