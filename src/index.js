import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SudokuBoard from './SudokuBoard.js';

let sudokuboard;
function checkBoard(){
  for(let i = 0; i < sudokuboard.size; i++){
    for(let j = 0; j < sudokuboard.size; j++){
      console.log(document.getElementById(i.toString()+j.toString()).value);
      sudokuboard.addValue(i, j, document.getElementById(i.toString()+j.toString()).value);
    }
  }
  if(sudokuboard.checkBoard()){
    document.getElementById("output").innerText = "valid board";
  }
  else {
    document.getElementById("output").innerText = "wrong answer";
  }
}

function handleForm(event) {
  event.preventDefault();
  const size = document.getElementById("size").value;
  sudokuboard = new SudokuBoard(size);
  console.log(sudokuboard.size);
  for(let i = 0; i < size; i++){
    const divRow = document.createElement("div");
    for(let j = 0; j < size; j++){
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.setAttribute("id", i.toString()+j.toString());
      input.value = 0;
      divRow.append(input);

    }
    document.getElementById("board").append(divRow);
  }
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "check";
  button.addEventListener("click", checkBoard);
  document.getElementById("board").append(button);
}

window.addEventListener("load", function () {
  this.document.getElementById("board-form").addEventListener("submit", handleForm);
});
