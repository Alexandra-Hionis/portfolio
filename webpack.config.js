const path = require("path");

module.exports = {
  entry: "./assets/js/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },
};
