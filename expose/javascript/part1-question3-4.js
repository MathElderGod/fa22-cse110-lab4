function sumValues(num1, num2, add) {

    if (add) {

        let result = 0; // result has block scope

        result = num1 + num2; // gets reinitialized to 10 + 10 which is 20

        console.log('values added: ', result); // prints as result has block scope

    } else return;

    console.log('final result: ', result); // throws error as result has block scope with respect to the if statement
}

sumValues(10, 10, true);