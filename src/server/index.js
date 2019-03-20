import express from "express";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/redux/reducers";

import { renderInitialHTML } from "./utils/renderString";

const app = express();
app.listen("3000", () => console.log("listening on port 3000"));
app.use(express.static("public"));

const store = createStore(reducers, {}, applyMiddleware(thunk));

app.get("/", (req, res) => {
  const html = renderInitialHTML(store);
  // to render component as the bunch of HTML string use react-dom renderToString
  res.send(html);
});
