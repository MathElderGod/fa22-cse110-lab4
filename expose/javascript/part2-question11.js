// Question 11
function discountPrices(prices, discount) {
    const discounted = []; // block scope and constant
    const length = prices.length; // block scope and constant

    for (let i = 0; i < length; i++) { // i has block scope
        const discountedPrice = prices[i] * (1 - discount); // has block scope and is constant
        discounted.push(discountedPrice); // error trying to modify constant array
    }

    // console.log(i); // error due to i haveing block scope ReferenceError: i is not defined
    // console.log(length); // prints out 3

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

console.log(discountPrices([100, 200, 300], 0.5));