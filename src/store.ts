import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { IRootState } from "./types/launchTypes";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware<IRootState>();

const middleware = applyMiddleware(sagaMiddleware);

// mount it on the Store
export const store = createStore(
  reducers,
  composeWithDevTools(
    middleware
    // other store enhancers if any
  )
);

export default store;
