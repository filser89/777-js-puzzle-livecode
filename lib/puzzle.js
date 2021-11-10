const hintBtn = document.querySelector("#show-hint");
hintBtn.addEventListener("click", (e) => {
  const hintDiv = document.querySelector(".hint");
  hintDiv.classList.toggle("active");
});

const getIndex = (event) => {
  const cellIndex = event.currentTarget.cellIndex;
  const parent = event.currentTarget.parentNode;
  const rowIndex = parent.rowIndex;
  //   console.log(cellIndex, parent, rowIndex);
  const emptySquare = document.querySelector(".empty");
  const emptyCellIndex = emptySquare.cellIndex;
  const emptyRowIndex = emptySquare.parentNode.rowIndex;
  //   console.log(emptySquare, emptyCellIndex, emptyRowIndex);
  if (emptyCellIndex === cellIndex) {
    const moveV = Math.abs(rowIndex - emptyRowIndex) === 1;
    console.log(moveV);
  }
  if (emptyRowIndex === rowIndex) {
    const moveH = Math.abs(cellIndex - emptyCellIndex) === 1;
    console.log(moveH);
  }
};

// get all the squares
const squares = document.querySelectorAll("td");
console.log(squares);
// add an onClick event to each square
squares.forEach((square) => {
  square.addEventListener("click", getIndex);
});
// check if the clicked element can move (if it neighbors the empty element)
// get the cellIndex of clicked
// get the parent of clicked
// get the paret's rowIndex
// act accordingly

// IF can move

// swap the class 'empty' from the empty one to the clicked one

// also move the innerText of clicked to the one that was empty

// ELSE

// do nothing
