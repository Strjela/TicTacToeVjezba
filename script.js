const polje = document.querySelectorAll(".field");

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
    checkWinner(count());
    switchPlayer(currentPlayer);
  });
});

function setSimbol(x) {
  if (x.textContent != "") {
    return;
  } else return (x.textContent = currentPlayer);
}

function switchPlayer(player) {
  if (player === "x") {
    return (currentPlayer = "o");
  } else {
    return (currentPlayer = "x");
  }
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

function checkWinner(arr) {
  winningAxes.forEach((combination) => {
    if (checkSubset(arr, combination)) {
      return console.log("bbbbbbbbb");
    }
  });
}
