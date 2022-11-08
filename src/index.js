// --If the player rolls a 1, they score nothing and it becomes the next player's turn.
// --If the player rolls any other number, it is added to their turn total and the player's turn continues.
// --If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// --The first player to score 100 or more points wins.
// --At any time, the relevant decision information includes the player's score, the opponent's score, and the turn total. Such information corresponds to a 3D point in the graph's space. If this point is inside the gray solid, the player should roll. Otherwise, the player should hold.
// scoreboard objec

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ScoreBoard from './scoreboard.js';
import Dice from './dice';
//Dice object


let die = new Dice(6);
let scoreBoard = new ScoreBoard(die);


document.getElementById("roll").addEventListener("click", function () {
  scoreBoard.roll() ;
});
document.getElementById("roll").addEventListener("click", function () {
  scoreBoard.CalculateTotalScore() ;
});
document.getElementById("hold").addEventListener("click", function () { scoreBoard.holdPoints();
});

//UI
function displayWhichPlayerTurn() {
  let playerTurn = document.getElementById("player-turn");
  if (scoreBoard.playerTurn % 2 === 1) {
    playerTurn.innerText = "Player 1's Turn"
  }
  else {
    playerTurn.innerText = "Player 2's Turn"
  }
}
function displayCurrentRolls() {
  document.getElementById("current-roll").innerText = scoreBoard.dice.curRoll;
  document.getElementById("current-score").innerText = scoreBoard.currentScore;
  
}

function displayPlayerScore() {
  document.getElementById("player1-score").innerText = scoreBoard.player1Score;
  document.getElementById("player2-score").innerText = scoreBoard.player2Score;
  document.getElementById("current-roll").innerText = 0;
  document.getElementById("current-score").innerText = 0;
}
function displayWinner() {
  const winner = scoreBoard.CalculateTotalScore();
  if (winner === 1) {
    prompt("Winner 1");
  } else {
    if (winner === 2) {
      prompt("Winner 2");
    }
  }
}


document.getElementById("roll").addEventListener("click", function () {
  displayWhichPlayerTurn();
  displayCurrentRolls();
});
document.getElementById("hold").addEventListener("click", function () { 
  displayPlayerScore();
  displayWhichPlayerTurn()
});
