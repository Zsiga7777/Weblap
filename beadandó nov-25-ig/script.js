let clickNumber = 0;
let enemyPlayer = 0;
let itemNumber = 0;
let gridItems = document.getElementsByClassName("grid-item");
console.log(gridItems)
let eredmeny = document.getElementById("eredmeny");
let gridContainer = document.getElementById("grid-container");
let playerSelection = document.getElementsByTagName("input");
let currentPlayer = 1;
let winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for (let i = 0; i < 9; i++) {
    gridItems[i].addEventListener("click", (event) => { itemNumber = event.target.id });
    gridItems[i].addEventListener("click", game);
}

document.getElementById("gomb").addEventListener("click", restart);

function game() {
    if (gridContainer.getAttribute("disabled")) {
        return;
    }
    clickNumber++;
    if (clickNumber == 1) {
        firsClick();
    }
    if (enemyPlayer == 0) {
        if (gridItems[itemNumber].innerHTML == "") {
            if (clickNumber % 2 != 0) {
                gridItems[itemNumber].innerHTML = "x";
            }
            else {
                gridItems[itemNumber].innerHTML = "o";
            }
        }
    }
    else {
        if (gridItems[itemNumber].innerHTML == "") {
            gridItems[itemNumber].innerHTML = "x";
            if(checkWhoWins())
            {
                return;
            }
            else
            {
            aiPlay();
            }
        }
    }
    

    if (clickNumber >= 3) {
        checkWhoWins();
    }
}

function firsClick() {
    for (let i = 0; i < 2; i++) {
        playerSelection[i].setAttribute("disabled", true);
        if (playerSelection[i].checked == true) {
            enemyPlayer = i;
        };
    };
}

function restart() {
    clickNumber = 0;
    enemyPlayer = 0;
    itemNumber = 0;
    for (let i = 0; i < 9; i++) {
        gridItems[i].innerHTML = "";
    }
    for (let i = 0; i < 2; i++) {
        playerSelection[i].removeAttribute("disabled");
    };
    eredmeny.innerHTML = "";
    gridContainer.removeAttribute("disabled");
}

function checkWhoWins() {
    let remainingSlots = 0;
    let won = false;
    for (let i = 0; i < 9; i++) {
        if (gridItems[i].innerHTML == "") {
            remainingSlots++;
        }
    }
    let winner = getWinner(gridItems); 
        if (winner != null) {
            gridContainer.setAttribute("disabled", true);
            eredmeny.innerHTML = `${winner} nyert`;
            won = true;
            return true;
    }

    if (remainingSlots == 0 && won == false) {
        gridContainer.setAttribute("disabled", true);
        eredmeny.innerHTML = "Döntetlen";
        return true
    }
}

function aiPlay() {
    let bestScore = -Infinity;
    let temp = 0;
    for (let i = 0; i < 9; i++) {
        if (gridItems[i].innerHTML == "") {
            gridItems[i].innerHTML = "o";
            let score = minimax(gridItems, false);
            gridItems[i].innerHTML = "";;
            if (score > bestScore) {
                bestScore = score;
                temp = i;
            }
        }
    }
    gridItems[temp].innerHTML = "o";
}

function minimax(gridItems, isMaximising) {
    let winner = getWinner(gridItems);
    if (winner === "x") return -1;
    if (winner === "o") return 1;

    let temp = [];
    for(let i = 0; i < 9; i++)
    {
        temp.push(gridItems[i].innerHTML)
    }
    if (temp.every(item => item != "")) return 0;

    if (isMaximising) {
        var bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (gridItems[i].innerHTML == "") {
                gridItems[i].innerHTML = "o";
                let score = minimax(gridItems, false);
                gridItems[i].innerHTML = "";
                bestScore = Math.max(bestScore, score);
            }
        }
    } else {
        var bestScore = Infinity;
        for (let i = 0; i < 9; i++) {

            if (gridItems[i].innerHTML == "") {
                gridItems[i].innerHTML = "x";
                let score = minimax(gridItems, true);
                gridItems[i].innerHTML = "";
                bestScore = Math.min(bestScore, score);
            }

        }
    }
    return bestScore;
}

function getWinner(board) {
    for (const [a, b, c] of winning_combinations) {
        if (board[a].innerHTML && board[a].innerHTML === board[b].innerHTML && board[a].innerHTML === board[c].innerHTML) {
            return board[a].innerHTML;
        }
    }
    return null;
}