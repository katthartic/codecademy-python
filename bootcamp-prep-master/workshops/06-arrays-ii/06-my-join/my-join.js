// YOUR CODE BELOW
function myJoin(array, separator = ','){
    let string = ''
    for (i = 0; i < array.length; i++) {
      element = array[i]
      if (element === undefined || element === null) {
        string += ''
      } else {
        string += element
      }
      string += separator
    }
    return string.slice(0, -separator.length)
  }