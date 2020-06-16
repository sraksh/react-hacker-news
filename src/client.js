import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "./routes";
import rootReducer from "./reducers";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
