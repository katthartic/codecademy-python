// YOUR CODE BELOW
function veryOdd (arr) {
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        num = arr[i]
        if (num % 2 === 1) {
            newArr.push(num)
        }
    }
    return newArr
}