let word = 'carrots';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';


let lastWord;

// YOUR CODE BELOW
if (word.charAt(0) === 'p' && word.length >= 7) {
    lastWord = word.toUpperCase();
    console.log(lastWord);
} else {
    lastWord = word;
    console.log(lastWord);
}