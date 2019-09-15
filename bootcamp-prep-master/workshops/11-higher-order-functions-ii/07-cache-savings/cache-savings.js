// My Solution
// const cacheSavings = (callback) => {
//     results = []
//       return (arg) => {
//         for (let i = 0; i < results.length; i++) {
//           if (results[i].arg === arg) return results[i].result
//         }
//         result = callback(arg)
//         results.push({arg: arg, result: result})
//         return result
//       }
//   }

//Class Solution
const cacheSavings = (callback) => {
    cache = {}
    return (arg) => {
        if (arg in cache) return cache[arg]
        const result = callback(arg)
        cache[arg] = result
        return result
    }
}