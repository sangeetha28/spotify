import express from "express";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/redux/reducers";
import Routes from "./Routes";
import { matchRoutes } from "react-router-config";
import "babel-polyfill";

import { renderInitialHTML } from "./utils/renderString";

const app = express();
app.listen("3000", () => console.log("listening on port 3000"));
app.use(express.static("public"));

const store = createStore(reducers, {}, applyMiddleware(thunk));

app.get("/", (req, res) => {
  const promise = matchRoutes(Routes, req.path).map(({ route }) => {
    route.fetchData ? route.fetchData(store) : null;
  });

  Promise.all(promise)
    .then(() => {
      res.send(renderInitialHTML(req, store));
    })
    .catch(err => console.log("Error...", err));
  // to render component as the bunch of HTML string use react-dom renderToString
});
