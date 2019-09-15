// YOUR CODE BELOW
const callCount = () => {
    let count = 0
    return () => {
        count++
        return count
    }
}