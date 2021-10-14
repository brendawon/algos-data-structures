//DSA Udemy Course
//Given a number n, return the nth number in the Fibonacci sequence

//base case: if n is 1 or 2, return 1
//otherwise, return fib(n-1)+fib(n-2)
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

//sample input: fib(4)
//sample output: 3
/*
iterative approach
function fib(n){
  let result = [0,1];
  for (let i = 2; i < n + 1; i++){
    result.push(result[i-2] + result[i-1])
  }
  return result[n];
}
*/
