const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");

app.use("", express.static(path.resolve(__dirname, "../../dist")));

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
