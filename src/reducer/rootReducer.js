//import { combineReducers } from "redux"; if you dont use immutable

import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export default rootReducer;
