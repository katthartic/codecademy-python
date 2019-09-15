// YOUR CODE BELOW

const getDogBreeder = (defaultName, defaultAge) => {
    return function dogBreeder (name = defaultName, age = defaultAge) {
        let dogObj = {}
        if (typeof name === 'string') {
            dogObj.name = name
            dogObj.age = age
        } else {
            dogObj.name = defaultName
            dogObj.age = name
        }
        return dogObj
    }
}