// YOUR CODE BELOW
//with out .forEach
// function whosASpecial (animals) {
//   for (let i = 0; i < animals.length; i++) {
//     animal = animals[i]
//     console.log(`${animal.name} the ${animal.species} is very special!`)
//   }
// }

// with .forEach - Method 1
// function whosASpecial (pets) {
//   let str = ''
//   pets.forEach((pet) => {
//     const compliment = `${pet.name} the ${pet.species} is very special! `
//     str += compliment
//   })
//   return str.slice(0,-1)
// }

//with .forEach - Method 2
function whosASpecial (pets) {
    let praises = []
    pets.forEach((pet) => {
      const praise = `${pet.name} the ${pet.species} is very special!`
      praises.push(praise)
    })
    return praises.join(' ')
  }