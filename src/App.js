import React, { useEffect } from "react";
import { Col } from "antd";
import { Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import Logo from "./statics/logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails, setLoading } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.get("pokemons")).toJS();
  const loading = useSelector((state) => state.get("loading"));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
