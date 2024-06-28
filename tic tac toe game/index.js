const cell = document.querySelectorAll(".cell");
const statustxt = document.querySelector("#statusText");
const restart = document.querySelector("#restart-btn");


//agr in index pr same cheej hai to hi jeetega player.
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];


//starting me sare boxes khali hogi
let options = ["", "", "", "", "", "", "", "", ""];
//khelna X player start karega
let player = "X";
//game start hai running ye batata hai
let running = true;

initializegame();

function initializegame() {
    //agr kisi bhi cell pr click kro to cellclicked function me jo likha hai vo hone lge
    cell.forEach(cell => cell.addEventListener("click", cellclicked));
    restart.addEventListener("click", restartgame);
    statustxt.textContent = `${player}'s turn`;
}

function cellclicked() {
    //ye line check krti hai ki kon sa cell click kra gya hai uska cell index leti hai
    const cellIndex = this.getAttribute("cellIndex");
    //agr cell pehle se bhara hua hai ya code nhi chal rha hai to function ko vhi rok do
    if (options[cellIndex] !== "" || !running) {
        return;
    }
    //this: This argument provides a reference to the clicked cell element
    updatecell(this, cellIndex);
    changeplayer();
    checkwinner();
}

function updatecell(cell, cellIndex) {
    options[cellIndex] = player;
    cell.textContent = player;
}

function changeplayer() {
    player = (player == "X") ? "O" : "X";
    statustxt.textContent = `${player}'s turn`;
}

function checkwinner() {
    let roundWin = false;

    for (let i = 0; i < winCondition.length; i++) {

        //const condition = winCondition[i];: Retrieves the current winning condition for the iteration.
       //const cellA = options[condition[0]];: Retrieves the content of the first cell in the current winning condition.
       //const cellB = options[condition[1]];: Retrieves the content of the second cell in the current winning condition.
      //const cellC = options[condition[2]];: Retrieves the content of the third cell in the current winning condition.
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWin = true;
            break;
        }
    }

    if (roundWin) {
        statustxt.textContent = `${player} wins!`;
        running = false;
    } 
    //agr koi nhi jeeta hai abhi tak to fir ham check karege kya abhi bhi kisi cell me khali space bacha hai 
    //agr sari spaces bhar gyi hai aur abhi tak koi jeeta bhi nhi hai to iska mtlb ye hai ki game draw ho gya hai
    else if (!options.includes("")) {
        statustxt.textContent = `Draw!`;
        running = false;
    } 
    //agr koi jeeta nhi hai aur khali space bhi hai to iska mtlb dusre player ki chance aa gyi hai
    else {
        changeplayer();
    }
}

function restartgame() {
    player = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statustxt.textContent = `${player}'s turn`;
    cell.forEach(cell => cell.textContent = "");
    running = true;
}
