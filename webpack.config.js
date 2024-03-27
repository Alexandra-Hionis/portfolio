// const path = require("path");

// module.exports = {
//   entry: {
//     // bundle: "./assets/js/index.js",
//     file1: "./assets/js/footer-component.js",
//     file2: "./assets/js/contact-component.js",
//     file3: "./assets/js/nav.js",
//     file4: "./assets/js/swiper.js",
//     file5: "./assets/js/dataProjects.js",
//     file6: "./assets/js/copyright.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist/js"),
//     filename: "[name].bundle.js",
//   },
// };

const path = require("path");

module.exports = {
  entry: "./assets/js/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },
};
