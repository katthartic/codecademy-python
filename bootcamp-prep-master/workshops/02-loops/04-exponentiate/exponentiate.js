// YOUR CODE BELOW
function exponentiate (base, power) {
    let result = base
    if (power === 0 ) {
      return 1
    }
    else {
      for (let i=1 ; i<power ; i++) {
        result *= base
      }
    }
    return result
  }