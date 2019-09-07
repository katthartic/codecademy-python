// YOUR CODE BELOW
// function crazyCaps (beginStr) {
//     let finalStr = '';
//     let i = 0;
//     while (i < beginStr.length) {
//         if (i % 2 === 0 ) {
//             finalStr += beginStr[i].toLowerCase();
//         } else {
//             finalStr += beginStr[i].toUpperCase();
//         }
//         i++;
//     }
//     return finalStr;
// }

function crazyCaps (beginStr) {
    let finalStr = ''
    for (let i = 0 ; i < beginStr.length ; i++) {
        if (i % 2 === 0 ) {
            finalStr += beginStr[i].toLowerCase();
        } else {
            finalStr += beginStr[i].toUpperCase();
        }
    }
    return finalStr;
}