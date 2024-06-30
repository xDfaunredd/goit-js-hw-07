const input = document.querySelector("#name-input");
console.log(input);

const text = document.querySelector("#name-output");

const enterNameFunc = (event) => {
  text.textContent = event.currentTarget.value;

  if (text.textContent === "") {
    text.textContent = "Anonymous";
  }
};

input.addEventListener("input", enterNameFunc);
