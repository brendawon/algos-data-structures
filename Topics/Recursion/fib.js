//DSA Udemy Course
//Given a number n, return the nth number in the Fibonacci sequence

//base case: if n is 1 or 2, return 1
//otherwise, return fib(n-1)+fib(n-2)
function fib(n){
    if (n <= 2){
      return 1;
  }
  return fib(n-1) + fib(n-2);
}

//sample input: fib(4)
//sample output: 3