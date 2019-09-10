// YOUR CODE BELOW
//CONDENSED VERSION!!! SO GOOD!!!
function mySlice (originalArray, startIdx = 0, endIdx = originalArray.length) {
  newArray = []
  if (startIdx < 0) {
    startIdx += originalArray.length
  }
  if (endIdx < 0) {
    endIdx += originalArray.length
  }
  for (i = startIdx; i < endIdx; i++){
    newArray.push(originalArray[i])
  }
  return newArray
}

//FIRST ATTEMPT
// const mySlice = (originalArray, startIdx = 0, endIdx = originalArray.length) => {
//     newArray = []
//     if (startIdx < 0 && endIdx < 0) {
//       for (i = originalArray.length + startIdx; i < originalArray.length + endIdx; i++){
//       newArray.push(originalArray[i])
//       }
//       return newArray
//     }
//     if (startIdx < 0) {
//       for (i = originalArray.length + startIdx; i < endIdx; i++){
//       newArray.push(originalArray[i])
//       }
//       return newArray
//     }
//     if (endIdx < 0) {
//       for (i = startIdx; i < originalArray.length + endIdx; i++){
//       newArray.push(originalArray[i])
//       }
//       return newArray
//     }
//     for (i = startIdx; i < endIdx; i++){
//       newArray.push(originalArray[i])
//     }
//     return newArray
//   }