// YOUR CODE BELOW
function onlyOne(item1, item2, item3) {
    let item1bool = !!item1,
        item2bool = !!item2,
        item3bool = !!item3,
        count = 0;
    if (item1bool === true) count++;
    if (item2bool === true) count++;
    if (item3bool === true) count++;
    if (count === 1) {
        return true;
     } else return false;
}