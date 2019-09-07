// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
    let finalTime = 0
    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum'
    }
    while (currentNum < targetNum) {
      currentNum *= 2
      finalTime += 20
    }
    return finalTime
  }