const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

app.use("", express.static(path.resolve(__dirname, "../../dist")));

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = new meaningCloud({
  application_key: process.env.API_KEY,
});
