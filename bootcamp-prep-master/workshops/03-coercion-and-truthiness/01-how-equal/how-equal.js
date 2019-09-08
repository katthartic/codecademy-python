// YOUR CODE BELOW
function howEqual (type1, type2) {
    if (type1 === type2) {
      return 'strictly'
    }
    else if (type1 == type2) {
      return 'loosely'
    }
    return 'not equal'
  }