const form = document.querySelector("#form");
const formInput = document.querySelector("#url");
const polarityElement = document.getElementById("polarity");
const subjectivityElement = document.getElementById("subjectivity");
const textElement = document.getElementById("text");
const submitButton = document.querySelector("#form-submit");

//------------------------ validation of url --------------------------
const validateUrl = (url) => {
  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

const handleApiRequest = async (url) => {
  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleUrl: url,
      }),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    console.log({ data, response });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred. Please try again later.");
  }
};

//--------------------- Function to handle form submission ----------------------
const handleSubmit = async (event) => {
  event.preventDefault();

  //---------------------- Disable button to prevent double submit ----------------
  submitButton.disabled = true;

  //---------------------- Get the article URL input value ------------------------
  const articleUrl = formInput.value;
  console.log(articleUrl);

  //---------------------- Validate the URL ---------------------------------------
  if (articleUrl === "" || !validateUrl(articleUrl)) {
    alert("Please enter a valid URL");
    return;
  }

  await handleApiRequest(articleUrl)
    .then(({ data }) => {
      console.log(
        `Polarity: ${data.polarity}`,
        `Subjectivity: ${data.subjectivity}`,
        `Text: ${data.text}`
      );

      //----------------------- Display the API response data ---------------------------
      polarityElement.textContent = `Polarity: ${data.polarity}`;
      subjectivityElement.textContent = `Subjectivity: ${data.subjectivity}`;
      textElement.textContent = `Text: ${data.text}`;
    })
    .catch((error) => {
      polarityElement.textContent = "";
      subjectivityElement.textContent = "";
      textElement.textContent = "";

      alert(error.message);
      console.error(error);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
};

//------------------------- Add event listener to the form submit button ----------------
form.addEventListener("submit", handleSubmit);

console.log("work");
