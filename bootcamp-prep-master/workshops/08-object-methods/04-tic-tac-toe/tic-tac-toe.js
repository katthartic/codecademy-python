// YOUR CODE BELOW
let ticTacToe = {
    board: [[null, null, null],
            [null, null, null],
            [null, null, null]],
    move: function(character, rowNum, colNum){
      if (rowNum === 0 && colNum === 0){
        return ticTacToe.board
      } else if (ticTacToe.board[rowNum][colNum] === null) {
        ticTacToe.board[rowNum][colNum] = character
        return ticTacToe.board
      } else {
        return ticTacToe.board
      }
    },
    clear: function(){
      ticTacToe.board = [[null, null, null],
            [null, null, null],
            [null, null, null]]
      return ticTacToe.board
    }
   };