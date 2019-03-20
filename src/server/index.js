import express from "express";

import { renderInitialHTML } from "./utils/renderString";

const app = express();
app.listen("3000", () => console.log("listening on port 3000"));
app.use(express.static("public"));
const html = renderInitialHTML();

app.get("/", (req, res) => {
  // to render component as the bunch of HTML string use react-dom renderToString
  res.send(html);
});
