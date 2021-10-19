var isPowerOfThree = function (n) {
  //create power variable
  let power = 0;

  //while loop until 3**power is > n
  while (3 ** power <= n) {
    //check 3 ** power is equal to n; return true
    if (3 ** power === n) return true;

    //increment power
    power++;
  }
  //return false outside of loop
  return false;
};
