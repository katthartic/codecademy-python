// YOUR CODE BELOW
function lastFridayNight(arr) {
    finalSum = 0
    for (i = 0; i < arr.length; i++) {
        finalSum += arr[i].amount
    }
    return finalSum
}