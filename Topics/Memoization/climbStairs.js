//essentially the fibonacci sequence
//given n stairs, how many different ways can you climb the stairs when you can take either 1 or 2 steps at a time?
//n = 1 -> 1 (1)
//n = 2 -> 2 (1,1 & 2)
//n = 3 -> 3 (1,1,1 & 1,2 & 2,1)
//n = 4 -> 5 (1,1,1,1 & 1,1,2 & 1,2,1 & 2,1,1 & 2,2)

//add memo to arguments
var climbStairs = function (n, memo = {}) {
  //memo initialized as an empty obj

  if (n <= 2) return n;

  //if the memo includes the number, return the value
  if (memo[n]) {
    return memo[n];

    //if n is not yet stored in memo, add it with the value = recursive fib function
  } else {
    memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  }
  return memo[n];
};

/*
O(n) time and O(1) space
function getNthFib(n){
  //last two stores the last two values in the fib sequence
  const lastTwo = [0,1];
  let counter = 3;
  while(counter <= n){
    //next fib value of counter = the sum of the lastTwo

    const nextFib = lastTwo[0] + lastTwo[1];
    //swap the values to store next fib now as one of the last two fib values and remove the 'oldest' value
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    //counter increments and loop continues until we reach the nth fib
    counter++;
  }
  //when n is > 1 we return the second stored value, otherwise we return the first stored value
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
*/
