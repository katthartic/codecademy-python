// YOUR CODE BELOW
function rotateArray (originalArray, rotateNum) {
    let newArrPart = []
    if (rotateNum > 0){
      let newArrPart = originalArray.splice(-rotateNum)
      console.log(originalArray)
      console.log(newArrPart)
      return newArrPart.concat(originalArray)
    }
      if (rotateNum < 0){
      let newArrPart = originalArray.splice(-rotateNum)
      console.log(originalArray)
      console.log(newArrPart)
      return newArrPart.concat(originalArray)
    }
  }