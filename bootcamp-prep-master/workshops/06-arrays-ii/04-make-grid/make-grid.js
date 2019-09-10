// YOUR CODE BELOW
function makeGrid (numColumns, numRows) {
    let arr = []
    let grid = []
    for (i = 1; i <= numColumns; i++) {
      arr.push(i)
    }
    for (j = 0; j < numRows; j++){
      grid.push(arr)
    }
    return grid
  }