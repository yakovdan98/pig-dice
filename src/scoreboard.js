export default function ScoreBoard(dice) {
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
};

ScoreBoard.prototype.roll = function () {
  this.dice.curRoll = Math.floor(Math.random() * this.dice.numFaces) + 1;
  console.log(this.dice.curRoll);
};

ScoreBoard.prototype.holdPoints = function () {
  this.addPlayerPoints();
  this.playerTurn++;
  this.currentScore = 0;
  console.log("current player 1 score: " + this.player1Score);
  console.log("current player 2 score: " + this.player2Score);
};

ScoreBoard.prototype.CalculateTotalScore = function () {
  if (!this.whatIsCurrentScore()) {
    this.playerTurn++;
    return 0;
  }
  else if (this.playerTurn % 2 === 1 && this.player1Score + this.currentScore >= 100) {//player 1 turn
    console.log("hello 1");
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentScore = 0;
    return 1;
  } else if (this.playerTurn % 2 === 0 && this.player2Score + this.currentScore >= 100) {// player 2 turn
    console.log("hello 2");
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentScore = 0;
    return 2;
  }
  return -1;
}; 