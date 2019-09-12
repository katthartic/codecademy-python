// YOUR CODE BELOW
function callThemAll(obj,value){  let results = []  for(key in obj){
    const val = obj[key]
      // console.log(typeof val)
      if (typeof val==='function'){
       let res = val(value)
       results.push(res)
      }
    }
    return results
   }