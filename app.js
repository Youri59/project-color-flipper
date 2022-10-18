const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

let randomColor = colors[Math.floor(Math.random() * colors.length)];

btn.addEventListener("click", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
  let text = document.querySelector("#color");
  text.innerText = randomColor;
});
