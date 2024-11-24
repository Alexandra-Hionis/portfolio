const path = require("path");

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Resolves CSS imports
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },

  mode: "development",
};
