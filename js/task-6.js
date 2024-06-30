function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let boxesArray = [];
let counter = 0;
let amount = 0;

const getValue = (event) => {
  amount = event.currentTarget.value;
};

input.addEventListener("change", getValue);

const createBoxes = (amount) => {
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = `<div style="width:${30 + counter}px; height:${
        30 + counter
      }px; background:${getRandomHexColor()};"></div>`;

      boxesArray.push(box);

      counter += 10;
    }
  }
  boxes.insertAdjacentHTML("afterbegin", boxesArray.join(" "));
  console.log(boxesArray);
};

const destroyBoxes = () => {
  boxesArray = [];
  boxes.innerHTML = "";
  counter = 0;
};

createButton.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(amount);
});
destroyButton.addEventListener("click", () => destroyBoxes());
