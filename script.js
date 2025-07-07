let intervalLeft, intervalRight;
let chosenSymbol = 0;

window.onload = function() {
  const picker = document.getElementById("symbolPicker");
  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = "img/symbol" + i + ".png";
    img.dataset.symbol = i;
    img.onclick = function() {
      chosenSymbol = parseInt(this.dataset.symbol);
      document.getElementById("center").src = "img/symbol" + chosenSymbol + ".png";
      document.getElementById("center").dataset.symbol = chosenSymbol;

      document.querySelectorAll(".symbol-picker img").forEach(el => el.classList.remove("selected"));
      this.classList.add("selected");
    };
    if (i === 0) img.classList.add("selected");
    picker.appendChild(img);
  }
};

function getRandomSymbol() {
  return Math.floor(Math.random() * 10);
}

function setSymbolImage(id, symbolIndex) {
  const el = document.getElementById(id);
  el.src = "img/symbol" + symbolIndex + ".png";
  el.dataset.symbol = symbolIndex;
}

function start() {
  intervalLeft = setInterval(() => {
    setSymbolImage("left", getRandomSymbol());
  }, 100);

  intervalRight = setInterval(() => {
    setSymbolImage("right", getRandomSymbol());
  }, 100);

  document.getElementById("result").textContent = "";
}

function stop() {
  clearInterval(intervalLeft);
  clearInterval(intervalRight);

  const left = parseInt(document.getElementById("left").dataset.symbol);
  const center = parseInt(document.getElementById("center").dataset.symbol);
  const right = parseInt(document.getElementById("right").dataset.symbol);

  const matches = [left, center, right].filter(s => s === center).length;

  let message = "ð Nic jsi nevyhrÃ¡l.";
  if (matches === 2) {
    message = "ðµ VyhrÃ¡l jsi 1 pÃ­seÅ!";
  } else if (matches === 3) {
    message = "ð VyhrÃ¡l jsi 2 pÃ­snÄ!";
  }

  document.getElementById("result").textContent = message;
}