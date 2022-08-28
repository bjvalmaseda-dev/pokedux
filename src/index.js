import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import thunk from "redux-thunk";
import { pokemonsReducer } from "./reducer/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "./middlewares";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composedEnhancers = compose(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composedEnhancers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/*
const composeAlt= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

*/
