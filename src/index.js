import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { pokemonsReducer } from "./reducer/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(pokemonsReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
