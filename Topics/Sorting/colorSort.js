var sortColors = function (nums) {
  //sort in the order 0,1,2 in place without the sort function and no auxillary datastructure, can only loop through once
  //put all 0s in the front, all 2s in the back, 1s leave in place
  //two pointers -> zeroIndex starting at the beginning of the array and twoIndex starting at the end of the array
  let zeroIndex = 0;
  let twoIndex = nums.length - 1;
  let checker = 0;
  //while loop until checker > twoIndex
  while (checker <= twoIndex) {
    //if num is 0, swap with num at zeroIndex and increment zeroIndex
    if (nums[checker] === 0) {
      [nums[zeroIndex], nums[checker]] = [nums[checker], nums[zeroIndex]];
      zeroIndex++;
      checker++;
    } else if (nums[checker] === 2) {
      //if num is 2, swap w/ two index and decrement two index
      [nums[checker], nums[twoIndex]] = [nums[twoIndex], nums[checker]];
      twoIndex--;
    } else if (nums[checker] === 1) {
      //do not move checker along when nums[checker] is two since the value it swapped with at the two index needs to be checked still
      checker++;
    }
  }
};
