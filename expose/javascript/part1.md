<!-- /////////////////////////////////////////////////////////////////////// -->
<!-- var Declaration -->

<!-- The var keyword provides its variable with what is known as function scope. 
This means that regardless of the block it is defined in, it can be accessed anywhere 
inside the function it is defined in. Be careful when using var to declare your 
variables in your programs, as it may lead to naming conflicts and scoping issues. -->
## var declaration:

1. What is printed by line 9? If the code returns an error, explain why.
   - values added:  20
  
2. What is printed by line 13? If the code returns an error, explain why. 
   - final result:  20

<!-- let Declaration -->

<!-- Declaring a variable with the let keyword provides the variable with what is 
known as block scope. This means that it can only be accessed within the block it is 
defined in, unlike the var keyword. -->
## let declaration

3. What is printed by line 9? If the code returns an error, explain why.
   - values added:  20

4. What is printed by line 13? If the code returns an error, explain why.
   - nothing will be printed, as an error will be thrown. 
   - ReferenceError: result is not defined (is thrown)
   - An error is thrown by javascript, because using the "let" keyword gives the 
     corresponding variable block scope. This means that "result" is only visible 
     inside the if conditional statement due to its block scope behavior. When line 
     13 attempts to execute, the variable "result" no longer exists, or is no longer 
     visible outside the if statement. Thus an error is thrown as it is considered
     undefined!

<!-- const declaration -->

<!-- The const keyword gives its variable the same scope as the let keyword. Declaring 
a variable with the const prevents it from being reassigned after it is assigned for 
the first time, much like the final keyword in Java, making it useful for declaring 
constants in your programs.  -->

## const declaration

5. What is printed by line 9? If the code returns an error, explain why.
   - nothing is printed as an error is thrown 
   - TypeError: Assignment to constant variable. (is thrown)
   - An error is thrown by javascript, because result is constant when it is declared
     and initialized on line 5. On line 7, the program is trying to reinitalize our 
     constant variable "result" which is an illegal operation, when dealing with constant 
     variables. The program crashes as a result due to this error.

6. What is printed by line 13? If the code returns an error, explain why. 
   - nothing is printed as an error is thrown 
   - TypeError: Assignment to constant variable. (is thrown)
   - An error is thrown by javascript, because result is constant when it is declared
     and initialized on line 5. On line 7, the program is trying to reinitalize our 
     constant variable "result" which is an illegal operation, when dealing with constant 
     variables. The program crashes as a result due to this error. 
   - This is the same error from the prior question, and remains the same issue throughout the program 