// YOUR CODE BELOW
function everyWhichWay(num1, num2, num3) {
    switch (num3) {
        case (num1 + num2):
            return 'sum';
            break;
        case (num1 - num2):
            return 'difference';
            break;
        case (num1 * num2):
            return 'product';
            break;
        case (num1 / num2):
            return 'fraction';
            break;
        default:
            return null;
            break;
    }
}