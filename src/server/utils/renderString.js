import { renderToString } from "react-dom/server";
import App from "../../client/App";
import React from "react";
import { Provider } from "react-redux";

export const renderInitialHTML = store => {
  const content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return `<html>
    <head>
    <title>Spotify App</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
    <link rel="stylesheet" href="styles.css" />
    
    </head>
    <body>
     <div id="root">${content}</div>
    </body>
    <script src="bundle.js"> </script>
    </html>
    `;
};
