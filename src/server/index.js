
const app = express();

import React from "react";
import express from "express";
import Home from "../client/components/Home";
import { renderToString } from "react-dom/server";

app.listen("3000", () => console.log("listening on port 3000"));

app.get("/", (req, res) => {
  // to render component as the bunch of HTML string use react-dom renderToString
  const content = renderToString(<Home />);
  res.send(content);
});
