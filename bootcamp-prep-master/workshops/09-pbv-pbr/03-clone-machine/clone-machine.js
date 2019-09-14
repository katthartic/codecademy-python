// YOUR CODE BELOW
//Class solution
function cloneMachine(parent) {
    const clone = {...parent }
    clone.name = parent.name + 'Clone'
    parent.offspring.push(clone.name)
    clone.offspring = [] // method 1
    //clone.offspring = [...parent.offspring] // method 2... doesn't seem to work
    return clone
  }
  
  // function cloneMachine(objA){
  //   let objB = {...obj}
     
  //   objB.name = objB.name +'Clone'
  //   // obj.offspring = []
  //   obj.offspring.push(objB.name)
  //   objB.offspring = []
  //   return objB
  // }