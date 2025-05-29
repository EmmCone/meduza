
const symbols = [...Array(10).keys()];
let intervalLeft, intervalRight;
let centerSymbol;

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function setSymbolImage(elementId, symbolIndex) {
  const el = document.getElementById(elementId);
  el.src = "img/symbol" + symbolIndex + ".PNG";
  el.dataset.symbol = symbolIndex;
}

function start() {
  centerSymbol = getRandomSymbol();
  setSymbolImage("center", centerSymbol);

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
  const right = parseInt(document.getElementById("right").dataset.symbol);
  const center = centerSymbol;

  const matches = [left, center, right].filter(s => s === center).length;

  let message = "😐 Nic jsi nevyhrál.";

  if (matches === 2) {
    message = "🎵 Vyhrál jsi 1 píseň!";
  } else if (matches === 3) {
    message = "🎉 Vyhrál jsi 2 písně!";
  }

  document.getElementById("result").textContent = message;
}
