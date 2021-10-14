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
