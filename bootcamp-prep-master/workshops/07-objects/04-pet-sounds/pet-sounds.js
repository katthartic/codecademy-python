let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
function petSounds(animal,country) {
  //Dogs
  if (animal === 'dog') {
  let sound = animalNoises[0][animal][country]
  return `Dogs in ${country} say ${sound}`}
  //Cats
  if (animal === 'cat') {
  let sound = animalNoises[1][animal][country]
  return `Cats in ${country} say ${sound}`}
  //Chickens
  if (animal === 'chicken') {
  let sound = animalNoises[2][animal][country]
  return `Chickens in ${country} say ${sound}`}
}

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1)
//  }
 
//  function petSounds(animal,country) {
//    for (let i = 0; i < animalNoises.length; i++){
//      const obj = animalNoises[i]
//      const codex = obj[animal]
//      if (codex) {
//        const sound = codex[country]
//        return capitalize(`${animal}s in ${country} say ${sound}`)
//      }
//    }
//  }
 
 // function petSounds(animal,country) {
 //   for (let i = 0; i < animalNoises.length; i++){
 //     const obj = animalNoises[i]
 //     if (animal in obj) {
 //       const codex = obj[animal]
 //       const sound = codex[country]   
 //       return `${animal}s in ${country} say ${sound}` 
 //     }
 //   }
 // }