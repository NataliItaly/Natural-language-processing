const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./../dist")));
const meaningCloud = require("meaning-cloud");
const axios = require("axios").default;
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const port = 3000;

const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

const getData = async () => {
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", "YOUR TEXT HERE");
  formdata.append("lang", "auto"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
    headers: {
      "Content-Type": "aplication/json",
    },
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  );

  try {
    const data = (await response).json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

app.get("/test", function (req, res) {
  getData().then((data) => {
    res.send(data);
  });
});

console.log(`Your API key is ${process.env.API_KEY}`);
