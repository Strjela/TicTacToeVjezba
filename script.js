const polje = document.querySelectorAll(".field");
const infoDis = document.querySelector("#info");


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

//main
polje.forEach((el) => {
  el.addEventListener("click", () => {
    displayImage(el);
    checkDraw(count());
    checkWinner(count());

    switchPlayer(currentPlayer);
    el.disabled = true;
    console.log(currentPlayer);
  });
});



//mjenja igraca
function switchPlayer(player) {
  if (player === "x") {
    return (currentPlayer = "o");
  } else {
    return (currentPlayer = "x");
  }
}

//dodaje sliku znaka na stranicu ovisno o currentPlayeru
let xPlyImg = "./pictures/xplayer.png";
let oPlyImg = "./pictures/oplayer.png";
const din = document.querySelector(".simbol");

function displayImage(a) {
  let imgElement = document.createElement("img");
  imgElement.classList.add("simbol");
  if (currentPlayer === "x") {
    imgElement.src = xPlyImg;
    infoDis.textContent = "Player O's turn!";
    a.textContent = currentPlayer;
  } else if (currentPlayer === "o") {
    imgElement.src = oPlyImg;
    infoDis.textContent = "Player X's turn!";
    a.textContent = currentPlayer;
  }
  a.append(imgElement);
}

//fukcnija koja vraca array tako sta provjeri koji je text na polju
//koje je kliknuto te ovisno o currentPlayeru pusa index tog polja u taj array
function count() {
  let arr = [];
  polje.forEach((elem, num) => {
    if (elem.textContent === currentPlayer) {
      arr.push(num);
    }
  });
  return arr;
}

// uzima dva arraya i uspodeduje dali od neki od arraya isti
//uzima winningAxes i arr iz funkcije count
let checkSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

//funkcija prima arr iz count()
//i tu arr i winningAxes provodi kroz  checkSubset() te ako
//je true displaya winnera i iskljuci click opciju na button od fielda(zaustavlja igru)
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

//provjerava dali je draw tako sto uzima arr iz count() funkcije
//a draw ce biti ako je duljina arraya 5 jer je to max broj poteza
function checkDraw(item) {
  if (item.length >= 5) {
    infoDis.textContent = "Draw!";
  }
}



const restBtn = document.querySelector("#rstBtn");

//na ovaj nacin sam triba napravit main al nema veze
//ugl. restart button se moze stisnit bilo kad i vraca sve na pocetno stanje
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

