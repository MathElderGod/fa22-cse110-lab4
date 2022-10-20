// Question 7
function discountPrices(prices, discount) {
    let discounted = []; // block scope
    let finalPrice = 0; // block scope

    for (let i = 0; i < prices.length; i++) { // i has block scope
        let discountedPrice = prices[i] * (1 - discount); // has function scope
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i); // error, i is undefined due to block scope.
    // console.log(discountedPrice); // error, discountedPrice is undefined due to block scope
    console.log(finalPrice); // prints out the final price which should be 150. even though has block scope, was declared outside loop.

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

// console.log(discountPrices([100, 200, 300], 0.5));