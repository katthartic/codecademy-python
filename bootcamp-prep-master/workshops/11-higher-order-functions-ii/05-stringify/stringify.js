// YOUR CODE BELOW
const stringify = (callback) => {
    return () => {
        result = callback()
        return result.toString()
    }
}