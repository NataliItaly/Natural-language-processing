const formInput = document.querySelector("#text-input");
const formBtn = document.querySelector("#form-submit");
const formOut = document.querySelector("#form-out");

formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(formInput.value);
  formOut.textContent = formInput.value;
});

console.log("bu");
