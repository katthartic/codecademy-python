// YOUR CODE BELOW
function chainReaction(startVal, arr) {
    let finalVal = startVal
    for (let i = 0; i < arr.length; i++) {
        fn = arr[i]
        result = fn(finalVal)
        finalVal = result
    }
    return finalVal
}