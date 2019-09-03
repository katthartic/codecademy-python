let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW
/*
if (boolean1 === true && boolean2 === true) {
    result = 'both';
} else if (boolean1 === true || boolean2 === true) {
    result = 'one';
} else {
    result = 'none';
}
*/

/*
if (boolean1 && boolean2) {
    result = 'both';
} else if (boolean1 || boolean2) {
    result = 'one';
} else {
    result = 'none';
}
*/


(boolean1 && boolean2) ? result = 'both' : //returns 'both' if both variables are true
(boolean1 || boolean2) ? result = 'one' : //returns 'one' if only one variable is true
result = 'none'; //returns 'none' if both variables are false
