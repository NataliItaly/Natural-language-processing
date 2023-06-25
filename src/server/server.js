const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const meaningCloud = require("meaning-cloud");
const axios = require("axios").default;
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(bodyParser.json());

const POLARITY_MAP = {
  "P+": "strong positive",
  P: "positive",
  NEU: "neutral",
  N: "negative",
  "N+": "strong negative",
  NONE: "without polarity",
};

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/index.html"));
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { articleUrl } = req.body;

    const response = await axios.postForm(
      "https://api.meaningcloud.com/sentiment-2.1",
      {
        key: process.env.API_KEY,
        lang: "auto",
        url: articleUrl,
      }
    );

    const responseData = response.data;

    const sentenceTextSnippet = responseData.sentence_list
      .slice(5, 10)
      .map((sentence) => sentence.text)
      .join(" ");

    return res.json({
      data: {
        polarity: POLARITY_MAP[responseData.score_tag] || "n/a",
        subjectivity: responseData.subjectivity,
        text: `...${sentenceTextSnippet}...`,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

console.log(`Your API key is ${process.env.API_KEY}`);
