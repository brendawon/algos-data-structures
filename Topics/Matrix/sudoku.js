function doneOrNot(board) {
  //row check - create sets containing 9 empty arrays
  let rowCheck = new Array(9).fill().map(() => new Set());
  //col check
  let colCheck = new Array(9).fill().map(() => new Set());
  //3x3 box check
  let boxCheck = new Array(9).fill().map(() => new Set());

  //loop through board and obtain each value
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      //check each value against each rule
      let val = board[row][col];

      //figuring out which array in the boxCheck the value should be checked against with this math
      let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      //return false if value is in the set
      if (
        rowCheck[row].has(val) ||
        colCheck[col].has(val) ||
        boxCheck[boxIndex].has(val)
      )
        return "Try again!";

      //otherwise, add to set at the corresponding row/col/box
      rowCheck[row].add(val);
      colCheck[col].add(val);
      boxCheck[boxIndex].add(val);
    }
  }
  //return true at the end if all checks have passed
  return "Finished!";
}
