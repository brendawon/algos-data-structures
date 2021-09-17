//Given a sorted array, remove the duplicate values

var removeDuplicates = function (nums) {
  //do not make a new array

  let current = 0;
  let next = 1;

  //loop through array while next is still a valid index
  while (next < nums.length) {
    if (nums[current] === nums[next]) {
      //since array is sorted, check if the next number in the list is = to the current; if so, splice out (i+1, 1); otherwise iterate through
      nums.splice(next, 1);
    } else {
      current++;
      next++;
    }
  }
  console.log("array after splicing", nums);
  //Return k after placing the final result in the first k slots of nums.
  return nums.length;
};
