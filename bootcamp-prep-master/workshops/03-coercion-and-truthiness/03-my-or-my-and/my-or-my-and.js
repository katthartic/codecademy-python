// YOUR CODE BELOW
function myOr (a1, a2, a3) {
    if (!!a1) {
      return a1
    }
    if (!!a2) {
      return a2
    }
    if (!!a3) {
      return a3
    }
    return a3
  }
  
  function myAnd (a1, a2, a3) {
    if (!a1) {
      return a1
    }
    if (!a2) {
      return a2
    }
    if (!a3) {
      return a3
    }
     return a3
  }


  // function myOr (a1, a2, a3) {
//   let str = (a1 || a2 || a3)
//   return str
// }

// function myAnd (a1, a2, a3) {
//   let str = (a1 && a2 && a3)
//   return str
// }