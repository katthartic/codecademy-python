// YOUR CODE BELOW
let ticTacToe = {
    board: [[null, null,null],
            [null, null,null],
            [null, null,null]],
    move: function(character, rowNum, colNum){
        ticTacToe.board[rowNum-1][colNum-1] = character
        return ticTacToe.board
    },
    clear: function(){}
   };