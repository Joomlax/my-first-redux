import counterReducer from "./counter";
import loggedRecuder from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer, // or just only counterReducer after ES6
  isLogged: loggedRecuder,
});

export default allReducers;
