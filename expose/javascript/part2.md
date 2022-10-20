1. What will happen at line 12 and why? If the code causes an error, explain why. 
   - at line 12, the number "3" will be printed. Since the variable "i" was declared 
     using the "var" keyword, the variable "i" has function scope. Since the variable
     has function scope, and it is first initialized to 0 in the for loop, it will 
     continue to be incremented in each iteration of the for loop with respects to the
     size or length of the prices array. Since the prices array is length 3, we can understand 
     that the for loop will not run for more than 3 iterations. In the first iteration, 
     i is 0, then the conditional i < prices.length evalutes to true. the variable i is then
     incremented by 1. This case will repeat for the second iteration, which i will be incremented 
     to 2. The case repeats again for the third iteration, which i will be incremented to three.
     A fourth check is conducted in the for loop, i < prices.length, which evaluates to false since 
     3 is not less than 3. Thus, when the for loop terminates, we will print out 3 on line 12.

2. What will happen at line 13 and why? If the code causes an error, explain why.
   - at line 13, the number "150" will be printed. In the for loop, discountedPrice is declared 
     with the keyword "var". This gives this variable function scope! Aside from this, With var, 
     we can redeclare a variable any number of times. If we use var with an already-declared variable, 
     it’s just ignored. Therefore, each time the for loop executes, the variable discountedPrice is updated.
     In the last iteration of the for loop, prices[i] would be 300, since the last iteration will access the last 
     index value of the prices array, which is 300. prices is then multiplied by half, which is then reinitialized to 
     the variable discountedPrice, which should be the number 150. The variable is no longer altered in any way
     after its final reinitialization. Thus, the for loop terminates, and line 13 is reached. The last known 
     reinitialization set the variable discountedPrice to 150. Thus, the number "150" is printed.

3. What will happen at line 14 and why? If the code causes an error, explain why.
   - at line 14, the number "150" will be printed. the variable "finalPrice" is declared with the keyword var, giving it 
     function scope. It is also initially initialized with the value 0. The for loop is then executed. Throughout the for loop,
     each iteration reinitializes the variable "finalPrice" with Math.round(discountedPrice * 100) / 100....which is technically the 
     same value as the discountedPrice variable, at least during the respected iteration. Thus in the final iteration of the for loop,
     we know that discountedPrice has the value 150 from the previous question. Thus, Math.round(150 * 100) / 100, is 150. Since the 
     variable finalPrice is not altered anywhere else in the for loop, once the for loop terminates, we reach line 14. Since the last 
     reinitialization of finalPrice was done with the value 150, the number "150" will be printed. 

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. 
   - the function will return an array of size 3, which should contain the values as follows: [50, 100, 150]
     We can observe that discounted is an array that was declared with the "var" keyword. Thus, it has function scope.
     From the prior questions, we deduced that finalPrice would have the same value as discountedPrice in 
     a respected iteration. We can conclude that finalPrice would have the value 50 during the first iteration of the for loop,
     which then finalPrice is pushed into the discounted array. The array method arr.push(...items) – adds items to the end of the array.
     Thus, in the second iteration, the value 100 is pushed, and then the value 150 will be pushed in the third iteration. Since discounted
     has function scope, all these changes are applied. Thus, the function returns the discounted array which should be of size three, with 
     values as follows: [50, 100, 150]

5. What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   - at line 12, an error will be thrown. 
   - ReferenceError: i is not defined
   - An error is thrown because, in this case, all the variables from the prior questions were changed and declared with the keyword let.
     This keyword "let" gives any variable block scope. Since the variable i has blockscope, and it was declared within the for loop, it is 
     only visible within the for loop! Once the for loop terminates, the variable i is no longer visible elsewhere, or it no longer exists.
     When line 12 is reached, console.log(i) is trying to access the variable i, which had block scope! Since it no longer exists, the
     variable is considered undefined. Thus, the error: ReferenceError: i is not defined, is thrown. 
  
6. What will happen at line 13 and why? If the code causes an error, explain why. 
   - at line 13, an error will be thrown. 
   - ReferenceError: discountedPrice is not defined
   - An error is thrown because, in this case, all the variables from the prior questions were changed and declared with the keyword let.
     This keyword "let" gives any variable block scope. Since the variable discountedPrice has blockscope, and it was declared within the for loop, it is only visible within the for loop! Once the for loop terminates, the variable discountedPrice is no longer visible elsewhere, or it no longer exists. When line 13 is reached, console.log(discountedPrice) is trying to access the variable discountedPrice, which had block scope! Since it no longer exists, the variable is considered undefined. Thus, the error: ReferenceError: discountedPrice is not defined, is thrown. 

7. What will happen at line 14 and why? If the code causes an error, explain why.
   - at line 14, the number "150" will be printed out. In this case, all the variables from the prior questions were changed and declared 
     with the keyword let. This keyword "let" gives any variable block scope. However, finalPrice was declared and initilized in the function, outside the for loop. This means that the variable finalPrice can be modified by any other block of code under it since its scope belongs to the function block. In the for loop, we know from previous questions that finalPrice will contain the same values as discountedPrice. In the final iteration of the for loop, the value of finalPrice is set (reinitialized) to 150. However, when the for loop terminates, it does not lose its value, as it was not declared within the for loop, thus it remains defined. Therefore, when line 14 is reached, the number "150" will be printed.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   - the function will return an array of size 3, which should contain the values as follows: [50, 100, 150]
     We can observe that discounted is an array that was declared with the "let" keyword. Thus, it has block scope for the entire function.
     From the prior questions, we deduced that finalPrice would have the same value as discountedPrice in 
     a respected iteration. We can conclude that finalPrice would have the value 50 during the first iteration of the for loop,
     which then finalPrice is pushed into the discounted array. The array method arr.push(...items) – adds items to the end of the array.
     Thus, in the second iteration, the value 100 is pushed, and then the value 150 will be pushed in the third iteration. Since discounted
     has block scope for the enitre function, all these changes are applied. Thus, the function returns the discounted array which should be of size three, with values as follows: [50, 100, 150]

9. What will happen at line 11 and why? If the code causes an error, explain why.
    - at line 11, an error will be thrown
    - ReferenceError: i is not defined
    - An error will be thrown because, in this case, all the variables from the prior questions were changed and declared with the keyword let and the keyword const. In this case, this keyword "let" gives any variable block scope. Since the variable i has blockscope, and it was declared within the for loop, it is only visible within the for loop! Once the for loop terminates, the variable i is no longer visible elsewhere, or it no longer exists. When line 11 is reached, console.log(i) is trying to access the variable i, which had block scope! Since it no longer exists, the variable is considered undefined. Thus, the error: ReferenceError: i is not defined, is thrown. 

10. What will happen at line 12 and why? If the code causes an error, explain why.
    - at line 12, the number "3" will be printed. In this case, all the variables from the prior questions were changed and declared with the keyword let and the keyword const. The length variable was declared a const with its initial value being the size of the prices array, which is 3. The variable remained unchanged throughout the entire program, thus when line 12 is reached, the value "3" is simply printed. 

11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
    - The function will return an array of size 3, which should contain the values as follows: [50, 100, 150]
     We can observe that discounted is an array that was declared with the "const" keyword. Thus, it has block scope for the entire function and it cannot be initialized to any other array. From the prior questions, we deduced that discountedPrice would have the values 50, 100, and 150 throughout each respected iteration of the for loop. Although discounted price is constant, each iteration has its own const declaration and initialization of discountedPrice. We can conclude that discountedPrice would have the value 50 during the first iteration of the for loop, which then discountedPrice is pushed into the discounted array. The array method arr.push(...items) – adds items to the end of the array. Thus, in the second iteration, the value 100 is pushed, and then the value 150 will be pushed in the third iteration. Since discounted has block scope for the enitre function, all these changes are applied. Thus, the function returns the discounted array which should be of size three, with values as follows: [50, 100, 150]

12. Given the above Object, write the notation for:
    - [A] Accessing the value of the name property in the student object
    
    - student.name
   
    - [B] Accessing the value of the Grad Year property in the student object
  
    - student['Grad Year']
  
    - [c] Calling the function for the greeting property in the student object

    - student.greeting();
  
    - [D] Accessing the name property of the object in the Favorite Teacher property in student

    - student['Favorite Teacher'].name

    - [E] Access index zero in the array of the courseLoad property of the student object

    - student.courseLoad[0]