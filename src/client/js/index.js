import { analyzeArticle } from "./api";
import { isValidURL } from "./utils";
import "../scss/style.scss";

const form = document.querySelector("#form");
const formInput = document.querySelector("#url");
const polarityElement = document.getElementById("polarity");
const subjectivityElement = document.getElementById("subjectivity");
const textElement = document.getElementById("text");
const submitButton = document.querySelector("#form-submit");

analyzeForm.addEventListener("submit", handleFormSubmission);

//-------------Function to get the article URL from the DOM--------------
const getArticleUrl = () => formInput.value;

//-----------Function to display the API response data in the DOM---------
function displayResponseData(data) {
  polarityElement.textContent = `Polarity: ${data.polarity}`;
  subjectivityElement.textContent = `Subjectivity: ${data.subjectivity}`;
  textElement.textContent = `Text: ${data.text}`;
}

//-------------Function to display an error message in the DOM-------------
//------------No actual error in dom, just clear fields and alert-----------
function displayError(error) {
  polarityElement.textContent = "";
  subjectivityElement.textContent = "";
  textElement.textContent = "";

  alert(error.message);
  console.error(error);
}

function setButtonDisabled(disabled = true) {
  submitButton.disabled = disabled;
}

export function handleFormSubmission(event) {
  event.preventDefault();

  //------------ Disable button to prevent double submit--------------
  setButtonDisabled();

  //---------------- Get the article URL input value------------------
  const articleUrl = getArticleUrl();

  //------------------------ Validate the URL--------------------------
  if (articleUrl === "" || !isValidURL(articleUrl)) {
    alert("Please enter a valid URL");
    setButtonDisabled(false);
    return;
  }

  analyzeArticle(articleUrl)
    .then(({ data }) => {
      displayResponseData(data);
    })
    .catch((error) => {
      displayError(error);
    })
    .finally(() => {
      setButtonDisabled(false);
    });
}
