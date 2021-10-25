var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    //loop through nums and store in map
    if (map.has(nums[i])) {
      return true;
    }
    //if value is in map, return true
    //otherwise, add to map
    map.set(nums[i], true);
  }
  return false;
};
