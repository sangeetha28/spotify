// To handle JSX on the server -  bundle up server index.js using webpack and babel and let node execute the bundle.js
const path = require("path");

module.exports = {
  // Inform webpack that we're building a bundle for node instead of browser
  target: "node",

  mode: "development",

  //Tell webpack the root file of our server application
  entry: "./src/server/index.js",

  // Tell webpack where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //  Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            //for async code
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
