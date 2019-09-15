// YOUR CODE BELOW
const cacheSavings = (callback) => {
    results = []
      return (arg) => {
        for (let i = 0; i < results.length; i++) {
          if (results[i].arg === arg) return results[i].result
        }
        result = callback(arg)
        results.push({arg: arg, result: result})
        return result
      }
  }