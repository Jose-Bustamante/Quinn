import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store, { sagaMiddleware } from "./store";
import { rootSaga } from "./sagas";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
