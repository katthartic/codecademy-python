//YOUR CODE BELOW
function myIncludes(array, searchValue) {
    for (let i = 0; i < array.length; i++ ){
        if (array[i] === searchValue) {
            return true
        }
    }
    return false
}

//Solution from class
// const myIncludes = (haystack, needle) => {
//     for (let i = 0; i < haystack.length; i++) {
//         const el = haystack[i]
//         if (el === searchValue) {
//             return true
//         }
//     }
//     return false
// }