// YOUR CODE BELOW
function compareObjects (obj1, obj2) {
    for (let key in obj1) {
        if (key in obj2 !== true) {
            return false
        }
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    return true
}