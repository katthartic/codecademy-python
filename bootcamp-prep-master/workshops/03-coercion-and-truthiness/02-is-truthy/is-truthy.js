// YOUR CODE BELOW
function isTruthy (arg) {
    if(!arg === false) {
      return true
    } 
    if (typeof arg === 'boolean') {
      return 'The boolean value false is falsey'
    }
    if (typeof arg === 'object') {
      return 'The null value is falsey'
    }
    if (typeof arg === 'undefined') {
      return 'undefined is falsey'
    }
    if (typeof arg === 'number') {
      return 'The number 0 is falsey (the only falsey number)'
    }
    if (typeof arg === 'string') {
      return 'The empty string is falsey (the only falsey string)'
    }
  }