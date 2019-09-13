// YOUR CODE BELOW
function veryOddMutant(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        num = arr[i]
        if (num % 2 === 0) {
            arr[i] = 'normie'
            count ++
        }
    }
    return count
}