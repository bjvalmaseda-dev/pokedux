import React, { useMemo } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons, search }) => {
  const filteredPokemons = useMemo(
    () =>
      pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
      }),
    [pokemons, search]
  );

  return (
    <div className="PokemonList">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          key={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
