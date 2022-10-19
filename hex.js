const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.background = "#" + randomColor;
  let text = document.querySelector("#color");
  text.innerText = randomColor;
});
