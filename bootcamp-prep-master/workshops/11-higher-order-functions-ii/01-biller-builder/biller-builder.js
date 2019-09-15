// YOUR CODE BELOW
const billerBuilder = (state) => {
    let shipping = 0
    let salesTax = 0

    if (state === 'NY') {
        shipping = 1.03
        salesTax = 1.04
    }

    if (state === 'NJ') {
        shipping = 1.05
        salesTax = 1.06625
    }

    return (price) => {
        let total = price * shipping * salesTax
        return total
    }
}