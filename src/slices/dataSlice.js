import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDatails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    //dispacth loader
    dispatch(setLoading(true));
    //fetch
    const pokemonsRes = await getPokemons();
    const pokemonsDetails = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDatails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetails));
    //dispatch loader
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },

    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );
      //if we have a valid index
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
