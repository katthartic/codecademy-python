// YOUR CODE BELOW
function zooInventory(arr) {
    let flatArr = []
    for (let i = 0; i < arr.length; i++) {
      const name = arr[i][0]
      const animal = arr[i][1][0]
      const age = arr[i][1][1]
      const description = `${name} the ${animal} is ${age}.`
      flatArr.push(description)
    }
    return flatArr
  }