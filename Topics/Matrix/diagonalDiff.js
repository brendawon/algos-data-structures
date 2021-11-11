function diagonalDifference(arr) {
  //two pointers for diagonal 1 (starts at 0) and diagonal 2 (starts at the end)
  let d1 = 0;
  let d2 = arr.length - 1;
  let sum1 = 0;
  let sum2 = 0;
  //store the two sums
  //as we iterate through the rows, increment d1 and decrement d2, add to respective sums
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][d1];
    sum2 += arr[i][d2];
    d1++;
    d2--;
  }
  //return the absolute difference
  return Math.abs(sum1 - sum2);
}
