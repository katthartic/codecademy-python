// YOUR CODE BELOW
function oddCouple(array1) {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 === 1  && newArray.length < 2) {
            newArray.push(array1[i]);
        }
    }
    return newArray;
}