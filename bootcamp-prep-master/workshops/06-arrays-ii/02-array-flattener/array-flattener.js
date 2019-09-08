// YOUR CODE BELOW
function arrayFlattener (array) {
    finalArray = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        finalArray.push(...array[i])
      } else {
        finalArray.push(array[i])
      }
    }
    return finalArray
}