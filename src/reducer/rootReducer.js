//import { combineReducers } from "redux"; if you dont use immutable

//Using immutable
import { combineReducers } from "redux-immutable";
import { uiReducer } from "./ui";
import { pokemonsReducer } from "./pokemons";

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
