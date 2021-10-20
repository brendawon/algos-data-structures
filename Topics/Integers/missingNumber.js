var missingNumber = function (nums) {
  //     let checker = 0;
  // nums.sort((a,b) => a-b); //log n
  // for (let i = 0; i < nums.length; i++){ //n
  //   if (nums[i] === checker){
  //     checker++;
  //   } else {
  //     return checker;
  //   }
  // }
  // return checker;
  let actualSum = 0;
  let expectedSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
    expectedSum += i + 1;
  }
  return expectedSum - actualSum;
};
