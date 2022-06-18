import { combineReducers } from "redux";

import { currInfoReducer } from "./currInfoReducer";
import { currFromReducer } from "./currFromReducer";
import { currToReducer } from "./currToReducer";
import { currHeaderReducer } from "./currHeaderReducer";

const reducers = combineReducers({
  currencyInfo: currInfoReducer,
  currencyFrom: currFromReducer,
  currencyTo: currToReducer,
  currencyHeader: currHeaderReducer,
});

export default reducers;
