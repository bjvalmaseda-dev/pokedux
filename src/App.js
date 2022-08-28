import React, { useEffect } from "react";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import Logo from "./statics/logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(setPokemons(pokemonsRes));
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

export default App;
