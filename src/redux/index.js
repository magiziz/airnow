import { createStore, compose } from "redux";
import combineReducers from "./reducers";

export default createStore(combineReducers);
