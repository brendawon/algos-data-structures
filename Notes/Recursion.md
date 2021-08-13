# Recursion
A function that calls itself
- Needs a base/end case and a different input every time it is called
- Recursive functions are placed onto the call stack
- Ex.  
    - JSON.parse and JSON.stringify
    - document.getElementById and DOM traversal
    - object traversal

## Common problems
- Forgotten base case
- Forgotten return in base case
- Stack overflow (recursion is not stopping; call stack has too many items)

## Helper Method Recursion
- Main outer function; recursive function inside and called within the main function
- Helps prevent resetting variables within the main function while putting most of the logic within the recursive helper function (could also be circumvented if variable is defined outside of the function)

## Pure Recursion
- For arrays, use methods like slice, spread operator, and concat that make copies of arrays so they are not mutated
- For strings, use methods like slice, substr or substring to make copies of strings
- For objects, use Object.assign or spread operator