var majorityElement = function (nums) {
  //loop through the array
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    //store seen numbers in obj and increment
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  //find the largest value in the obj
  let majority = 0;
  let result;
  for (let key in obj) {
    if (obj[key] > majority) {
      majority = obj[key];
      result = key;
    }
  }
  return result;
};
