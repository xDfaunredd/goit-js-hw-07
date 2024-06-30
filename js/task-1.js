const item = document.querySelectorAll(".item");
console.log("Number of categories: ", item.length);

const category = item.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.childElementCount);
});
