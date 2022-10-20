// Question 5
function discountPrices(prices, discount) {
    let discounted = []; // block scope
    let finalPrice = 0; // block scope

    for (let i = 0; i < prices.length; i++) { // i has block scope
        let discountedPrice = prices[i] * (1 - discount); // has function scope
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // error, i is undefined due to block scope.
    // console.log(discountedPrice); // 
    // console.log(finalPrice); // 

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

// console.log(discountPrices([100, 200, 300], 0.5));