function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

const changeColor = () => {
  text.textContent = body.style.backgroundColor = getRandomHexColor();
};

button.addEventListener("click", changeColor);
