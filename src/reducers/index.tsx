import { combineReducers } from "redux";
import { launchReducer } from "./launchReducer";

const reducers = combineReducers({
  launchReducer,
});

export default reducers;
