import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "../server/Routes";
import "babel-polyfill";

const store = createStore(
  reducers,
  window.INITIAL_DATA,
  applyMiddleware(thunk)
);
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
