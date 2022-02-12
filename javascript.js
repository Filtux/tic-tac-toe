let mainDiv = document.querySelector('.main');
let gameBoardContainer = document.querySelector('.gameContainer');
let gameCell1 = document.getElementById('1');
let gameCell2 = document.getElementById('2');
let gameCell3 = document.getElementById('3');
let gameCell4 = document.getElementById('4');
let gameCell5 = document.getElementById('5');
let gameCell6 = document.getElementById('6');
let gameCell7 = document.getElementById('7');
let gameCell8 = document.getElementById('8');
let gameCell9 = document.getElementById('9');

let player1Turn;

winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
]

const Player = (playerName, playerScore) => {

    const getName = () => playerName;
    const getScore = () => playerScore;

    const takeTurn = () => {
        console.log('name')
    }
    return {getName, getScore, takeTurn}
};

const gameController = (() => {

    const generateGameGrid = () => {
        console.log(mainDiv)
        board = gameBoard.getBoard()
        for (i in board) {
            console.log(i)
            let gameCell = document.createElement('div')
            gameCell.classList.add('gameCell')
            gameCell.setAttribute('data-cell', '');
            gameCell.setAttribute("id", "'" + (Number(i) + Number(1)) + "'");
            gameBoardContainer.appendChild(gameCell)

    }}

    const attachListeners = () => {

        let gameCells = document.querySelectorAll('.gameCell');

        gameCells.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
    
            function handleClick(e) {
                console.log('clicked')
                let cell = e.target;
                let currentClass = player1Turn ? 'x' : 'o'
                placeMark(cell, currentClass)
            }
            
            function placeMark(cell, currentClass) {
                cell.classList.add(currentClass)
                swapTurn()
                if(checkWin(currentClass)) {
                    console.log('winner')
                }

            }
    
        })
    }

    function swapTurn() {
        player1Turn = !player1Turn
    }

    function checkWin(currentClass) {
        let gameCells = document.querySelectorAll('.gameCell');
        return winningPositions.some(combination => {
            return combination.every(index => {
                return gameCells[index].classList.contains(currentClass)
            })
        })
    }

        return {
            generateGameGrid, attachListeners, swapTurn, checkWin
        };
})();


const gameBoard = (() => {
    
    let board = [];
    for (i=1; i <= 9; i++) {
        board.push("'" + i + "'")
    }

    const getBoard = () => {
        return board
    }

    const resetBoard = () => {
        let board = [];
        for (i=0; i <= 9; i++) {
            board.push("'" + i + "'")
    }}

    return {

        getBoard, resetBoard
    
    };
  })();



console.log(gameBoard.getBoard())

let player1 = Player('Joe', 0);
let player2 = Player('Comp', 0)

console.log(player1.getName(), player1.getScore())
console.log(player2.getName(), player2.getScore())

//Displays the game grid...
gameController.generateGameGrid()
gameController.attachListeners()

