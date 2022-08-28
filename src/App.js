import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsAction } from "./actions";
import Logo from "./statics/logo.svg";
import "./App.css";

function App({ pokemons, setPokemons }) {
  console.log(pokemons);
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
