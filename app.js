const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Custom 404 handler
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
