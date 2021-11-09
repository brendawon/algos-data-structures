function miniMaxSum(arr) {
  //from an array of 5 numbers, find the smallest value of the sum of 4 numbers and the largest value of the sum of 4 numbers
  //approach 1: sort the array and then max = sum of the last 4 and min = sum of the first 4
  //approach 2: loop through everything and add them while finding the largest number and the smallest number, then subtract one or the other to find the largest and smallest sums
  let smallest = Infinity;
  let largest = 0;
  let total = arr.reduce((accum, current) => {
    smallest = Math.min(smallest, current);
    largest = Math.max(largest, current);
    accum += current;
    return accum;
  }, 0);
  //log min space max
  console.log(`${total - largest} ${total - smallest}`);
}
