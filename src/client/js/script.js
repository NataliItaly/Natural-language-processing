import analizeText from "./api";

const formInput = document.querySelector("#text-input");
const formBtn = document.querySelector("#form-submit");
const formOut = document.querySelector("#form-out");
const formRes = document.querySelectorAll(".form__result");

formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const errorMessage = "Please enter text";
  console.log(formInput.value);
  if (formInput.value === "") {
    formOut.textContent = errorMessage;
  }
  //formOut.textContent = formInput.value;
  formRes.forEach((res) => {
    res.classList.add("form__result_visible");
    res.textContent = "gg";
  });
  analizeText(formInput.value);
});

console.log("work");
