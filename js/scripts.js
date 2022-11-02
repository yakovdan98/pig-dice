// --If the player rolls a 1, they score nothing and it becomes the next player's turn.
// --If the player rolls any other number, it is added to their turn total and the player's turn continues.
// --If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// --The first player to score 100 or more points wins.
// --At any time, the relevant decision information includes the player's score, the opponent's score, and the turn total. Such information corresponds to a 3D point in the graph's space. If this point is inside the gray solid, the player should roll. Otherwise, the player should hold.
// scoreboard object
function ScoreBoard(dice) {
  this.player1Score = 0;
  this.player2Score = 0;
  this.currentScore = 0;
  this.playerTurn = 1; //odd === player1 turn, even === player2 turn / even and odd
  this.dice = dice;
}

//if curRoll = 1 make currentScore 0 return false, else 
ScoreBoard.prototype.whatIsCurrentScore = function () {
  if (this.dice.curRoll === 1) {
    this.currentScore = 0;
    return false;
  } else {
    this.currentScore += this.dice.curRoll;
    return true;
  }
};

ScoreBoard.prototype.addPlayerPoints = function () {
  if (this.playerTurn % 2 === 1) {//player 1 turn
    this.player1Score += this.currentScore;
  }
  else { // player 2 turn
    this.player2Score += this.currentScore;
  }
}

ScoreBoard.prototype.roll = function() {
  this.dice.curRoll = Math.floor(Math.random() * this.dice.numFaces) + 1;
  console.log(this.dice.curRoll);
}

ScoreBoard.prototype.CalculateTotalScore = function() {
  if (!this.whatIsCurrentScore()) {
    this.playerTurn++;
  }
  if (this.playerTurn % 2 === 1) {//player 1 turn
    if (this.player1Score + this.currentScore >= 100) {
      console.log("hello 1");
      this.player1Score = 0;
      this.player2Score = 0;
      this.currentScore = 0;
      return 1;
    }
  } else {
    if (this.player2score + this.currentScore >= 100) {
      console.log("hello 2");
      this.player1Score = 0;
      this.player2Score = 0;
      this.currentScore = 0;
      return 2;
    }
  }
}

ScoreBoard.prototype.holdPoints = function() {
  this.addPlayerPoints();
  this.playerTurn++;
  this.currentScore = 0;
  console.log("current player 1 score: " + this.player1Score);
  console.log("current player 2 score: " + this.player2Score);
};

//Dice object
function Dice(numFaces) {
  this.numFaces = numFaces;
  this.curRoll = 0;
}

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
