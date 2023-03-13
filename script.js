const polje = document.querySelectorAll(".field");
const infoDis = document.querySelector("#info");

console.log(infoDis);

let currentPlayer = "x";

const winningAxes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

polje.forEach((el) => {
  el.addEventListener("click", () => {
    setSimbol(el);
    displayImage(el);
    checkWinner(count());
    checkDraw(count());
    switchPlayer(currentPlayer);
    el.disabled = true;
    console.log(currentPlayer);
  });
});

function a(b) {
  if ((infoDis.textContent = `o won!` || infoDis.textContent == `x won!`)) {
    polje.disabled = true;
    console.log("aa");
  } else return;
}

function setSimbol(x) {
  return (x.textContent = currentPlayer);
}

function switchPlayer(player) {
  if (player === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}

let xPlyImg = "./pictures/xplayer.png";
let oPlyImg = "./pictures/oplayer.png";

const din = document.querySelector(".dinamo");

function displayImage(a) {
  let imgElement = document.createElement("img");
  imgElement.classList.add("dinamo");
  if (currentPlayer === "x") {
    imgElement.src = xPlyImg;
    infoDis.textContent = "Player X's turn!";
  } else if (currentPlayer === "o") {
    imgElement.src = oPlyImg;
    infoDis.textContent = "Player O's turn!";
  }

  a.append(imgElement);
}

let checkSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

function count() {
  let arr = [];
  polje.forEach((elem, num) => {
    if (elem.textContent === currentPlayer) {
      arr.push(num);
    }
  });
  return arr;
}

function checkDraw(item) {
  if (item.length >= 5) {
    infoDis.textContent = "Draw!";
  }
}

let dis = false;

function checkWinner(arr) {
  winningAxes.forEach((combination) => {
    if (checkSubset(arr, combination)) {
      infoDis.textContent = `Player ${currentPlayer.toLocaleUpperCase()} won!`;
      polje.forEach((el) => {
        el.disabled = true;
      });
    }
  });
}

const restBtn = document.querySelector("#rstBtn");

restBtn.addEventListener("click", retartEvery);

function retartEvery() {
  polje.forEach((item) => {
    item.textContent = "";
    while (item.hasChildNodes()) {
      item.removeChild(item.firstChild);
    }
    item.disabled = false;
  });
  infoDis.textContent = "Player X's turn!";
  currentPlayer = "x";
}

