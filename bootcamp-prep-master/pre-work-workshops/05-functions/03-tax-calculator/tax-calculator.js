// YOUR CODE BELOW
function taxCalculator(price, state) {
    let njTax = 1.06625
    let nyTax = 1.04
    let cost = 0
    if (state === 'NJ') {
        cost = price * njTax;
    } else if (state === 'NY') {
        cost = price * nyTax;
    } else {
        cost = price;
    }
    return cost;
}