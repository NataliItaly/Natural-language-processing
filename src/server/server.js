var path = require("path");
const express = require("express");

const app = express();

app.use(express.static("src/client"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("client/index.html", { root: __dirname + "/.." });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});