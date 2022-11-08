import Dice from '../src/dice.js';
import ScoreBoard from './../src/scoreboard.js';


describe('ScoreBoard', () => {
  let scoreBoard;

  beforeEach(() => {
    scoreBoard = new ScoreBoard(new Dice(6));
  });

  test('should return the current players turn', () => {
    expect(scoreBoard.playerTurn).toEqual(1);
  });

  test('what is current score', () => {
    scoreBoard.dice.curRoll = 3;
    expect(scoreBoard.whatIsCurrentScore()).toEqual(true);
  });

  test('what is current score', () => {
    scoreBoard.dice.curRoll = 1;
    expect(scoreBoard.whatIsCurrentScore()).toEqual(false);
  });

  test('add current score to the player points', () => {
    scoreBoard.currentScore = 10;
    scoreBoard.addPlayerPoints();
    expect(scoreBoard.player1Score).toEqual(10);
    expect(scoreBoard.player2Score).toEqual(0);
  });
  
  test('add current score to the player points', () => {
    scoreBoard.playerTurn = 2;
    scoreBoard.currentScore = 10;
    scoreBoard.addPlayerPoints();
    expect(scoreBoard.player2Score).toEqual(10);
    expect(scoreBoard.player1Score).toEqual(0);
  });

  test('roll dice', () => {
    scoreBoard.roll();
    expect(scoreBoard.dice.curRoll <= 6).toEqual(true);
  });
  
  test('determine winner', () => {

    scoreBoard.player1Score = 80;
    scoreBoard.currentScore = 21;
    expect(scoreBoard.CalculateTotalScore()).toEqual(1);
  });

  test('determine winner', () => {
    scoreBoard.playerTurn = 2;
    scoreBoard.player2Score = 80;
    scoreBoard.currentScore = 21;
    expect(scoreBoard.CalculateTotalScore()).toEqual(2);
  });

  test('determine winner', () => {
    scoreBoard.dice.curRoll = 1;
    expect(scoreBoard.CalculateTotalScore()).toEqual(0);
  });

  test('determine winner', () => {
    scoreBoard.player2Score = 70;
    scoreBoard.currentScore = 21;
    expect(scoreBoard.CalculateTotalScore()).toEqual(-1);
  });

  test('reset current score', () => {
    scoreBoard.currentScore = 3;
    scoreBoard.holdPoints();
    expect(scoreBoard.currentScore).toEqual(0);
  });

  test('add current score to total score', () => {
    scoreBoard.currentScore = 3;
    scoreBoard.player1Score = 10;
    scoreBoard.holdPoints();
    expect(scoreBoard.player1Score).toEqual(13);
  });





  
  
  // test('', () => {
  //   expect().toEqual();
  // });


});
