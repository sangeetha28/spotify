import { renderToString } from "react-dom/server";
import Home from "../../client/components/Home";
import React from "react";

export const renderInitialHTML = () => {
  const content = renderToString(<Home />);

  return `<html>
    <head>
    <title> Spotify App </title>
    </head>
    <body>
     <div id="root">${content}</div>
    </body>
    <script src="bundle.js"> </script>
    </html>
    `;
};
