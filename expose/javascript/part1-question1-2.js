function sumValues(num1, num2, add) {

    if (add) {

        var result = 0; // result has function scope

        result = num1 + num2; // gets reinitialized to 10 + 10 which is 20

        console.log('values added: ', result); // prints normally

    } else return;

    console.log('final result: ', result); // prints normally as result has function scope.
}

sumValues(10, 10, true);