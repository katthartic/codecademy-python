// YOUR CODE BELOW
function removeColumns (originalGrid, numColumns) {
    let element = originalGrid[0]
    let newGrid = []
    for (let n = numColumns; n > 0; n--) {
      element.pop()
    }
    for (m = 0; m < originalGrid.length; m++){
        newGrid.push(element)
    }
    return newGrid
  }
  
  /*
  function removeColumns(grid, numColumns) {
  
    // loop through every row in the grid
    for (let i = 0; i < grid.length; i++) {
  
      // for every column to remove...
      for (let j = 0; j < numColumns; j++) {
  
        // pop one colum/cell off of the current row
        grid[i].pop();
      }
    }
    return grid;
  }
  */