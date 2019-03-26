import { renderToString } from "react-dom/server";
import App from "../../client/App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../Routes";

export const renderInitialHTML = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `<html>
    <head>
    <title>Spotify App</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
    
    </head>
    <body>
     <div id="root">${content}</div>
    </body>
    <script>
    window.INITIAL_DATA = ${JSON.stringify(store.getState())}
    </script>
    <script src="bundle.js"> </script>
    </html>
    `;
};
