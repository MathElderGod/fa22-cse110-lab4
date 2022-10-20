function sumValues(num1, num2, add) {

    if (add) {

        const result = 0; // result has block scope

        result = num1 + num2; // throws error as you cannot reinitialize a constant variable

        console.log('values added: ', result); // prints 0, as you cannot reinitialize a constant variable

    } else return;

    console.log('final result: ', result); // throws error as result has block scope with respect to the if statement
}

sumValues(10, 10, true);