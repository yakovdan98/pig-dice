import Dice from '../src/dice.js';

describe('Dice', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const die = new Dice(6);
    expect(die.numFaces).toEqual(6);
  });


});