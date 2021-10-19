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
  let values = Object.values(obj);
  let majority = 0;
  let index;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > majority) {
      majority = values[i];
      index = i;
    }
  }
  //check the object key at that index
  return Object.keys(obj)[index];
};
