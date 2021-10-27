var intersect = function (nums1, nums2) {
  //return an array that contains the numbers that occur in both input arrays
  let obj = {};
  //loop through nums1 and store all in obj
  for (let i = 0; i < nums1.length; i++) {
    if (obj[nums1[i]]) {
      obj[nums1[i]]++;
    } else {
      obj[nums1[i]] = 1;
    }
  }
  //loop through nums 2 and check against obj, decrementing by 1 and adding to a return array
  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]]) {
      obj[nums2[i]]--;
      result.push(nums2[i]);
    }
  }
  //return array
  return result;
};
