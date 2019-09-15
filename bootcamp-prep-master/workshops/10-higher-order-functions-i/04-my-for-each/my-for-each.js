// YOUR CODE BELOW
const myForEach = (arr, callback) => {
  
    for (let i = 0; i < arr.length; i++) {
        //callback(arr[i], i)
        const element = arr[i]
        callback(element, i)
    }
  }