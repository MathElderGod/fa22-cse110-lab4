// Question 1
function discountPrices(prices, discount) {
    var discounted = []; // function scope
    var finalPrice = 0; // function scope

    for (var i = 0; i < prices.length; i++) { // i has function scope
        var discountedPrice = prices[i] * (1 - discount); // has function scope
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // prints out 3 due to final incrementation of i in the for loop
    // console.log(discountedPrice);
    // console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);