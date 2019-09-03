// YOUR CODE BELOW
function maxOfThree(num1,num2,num3) {
    let finalNum = num1
    if (finalNum < num2) {
        finalNum = num2;
    } 
    if (finalNum < num3) {
        finalNum = num3;
    }
    return finalNum;
}