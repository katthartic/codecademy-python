// YOUR CODE BELOW
function frequencyAnalysis(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        if (char in obj === false) {
            obj[char] = 1
            // console.log(obj)
        } else {
            obj[char]++
        }
    }
    return obj
}


// function frequencyAnalysis(string) {
//     let obj = {}
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         let count = 0
//             for (j = 0; j < string.length; j++) {
//                 if (char === string[j])
//                     count++
//             }
//         obj.char = count
//     }
//     return obj
// }