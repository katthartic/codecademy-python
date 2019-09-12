// YOUR CODE BELOW
function dogBreeder(name = 'Steve', age = 0) {
    let dogObj = {}
    if (typeof name === 'string') {
        dogObj.name = name
        dogObj.age = age
    } else {
        dogObj.name = 'Steve'
        dogObj.age = name
    }
    return dogObj
}