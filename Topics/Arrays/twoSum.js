//Given an array of numbers (unsorted) and a target number, return the indices of the numbers in the array that add up to the target

//loop through num array
//create var to keep track of outer loop index
//inner loop starting at outer loop index +1
//create var to keep track of inner loop index
//if outer loop index value + inner loop index value = target, return indices

//more optimized - use object to store values-indices
//create obj var and loop through array, making obj[arr[i]] = i
//second loop; create diff var to store target - arr[i]
//check if obj[diff] exists, if so, return [i, obj[diff]]

var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    //need to put i !== obj[diff] to avoid duplicate indices
    if (i !== obj[diff] && obj[diff]) {
      return [i, obj[diff]];
    }
  }
};

//sample input: nums = [3, 2, 4], target = 6
//expected output: [1,2]
