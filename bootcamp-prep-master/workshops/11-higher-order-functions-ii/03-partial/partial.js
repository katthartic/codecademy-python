// YOUR CODE BELOW
const partial = (callback, argA) => {
    return (argB) => {
        result = callback(argA,argB)
        return result
    }
}