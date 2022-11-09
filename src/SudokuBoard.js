export default function SudokuBoard(size) {
  this.array = [];
  this.size = size;
  for (let i = 0; i < this.size; i++) {
    let innerArray = [];
    for (let j = 0; j < this.size; j++) {
      innerArray.push(0);
    }
    this.array.push(innerArray);
  }
  console.log(this.array);
// this.currentItems = 0;
console.log(this.array.toString());
}

SudokuBoard.prototype.addValue = function (row, column, value) {
  this.array[row][column] = value;
}

SudokuBoard.prototype.checkRow = function (row) {
  let checkedArray = [];
  for (let i = 0; i < this.size; i++) {
    if (checkedArray.includes(this.array[row][i])) {
      return false;
    }
    else {
      checkedArray.push(this.array[row][i]);
    }
  }
  return true;
}

SudokuBoard.prototype.checkColumn = function (column) {
  let checkedArray = [];
  for (let i = 0; i < this.size; i++) {
    if (checkedArray.includes(this.array[i][column])) {
      return false
    }
    else {
      checkedArray.push(this.array[i][column]);
    }
  }
  return true;
}

SudokuBoard.prototype.checkBoard = function() {
  let boardArray = [];
  for (let i = 0; i < this.size; i++) {
    boardArray.push(this.checkRow(i), this.checkColumn(i));
  }
  if (boardArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}