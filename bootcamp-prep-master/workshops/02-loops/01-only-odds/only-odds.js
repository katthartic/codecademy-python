// YOUR CODE BELOW
function onlyOdds (num) {
    let sum = 0;
    for (i = 0; i < num; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;

}