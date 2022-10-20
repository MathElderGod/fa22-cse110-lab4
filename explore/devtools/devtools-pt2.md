1. What was the bug?
   - the bug appears to be that num1 and num2 are saving values of type string. Thus when calculateSum is called on num1 and num2, it simply concatenates the two strings together! Thus, returning the string "num1num2" instead of the desired sum that is intended for the function to return. 

2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)

    - I would use JSON.parse() on num1 and num2 to convert the data accordingly. for example, '5' and '6' will be converted to ints using JSON.parse(). The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.