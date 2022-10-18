const generateColor = () => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  let text = document.querySelector("#color");
  text.innerText = "#" + randomColor;
};
