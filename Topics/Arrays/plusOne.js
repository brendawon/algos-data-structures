var plusOne = function (digits) {
  //loop through array from the end
  for (let i = digits.length - 1; i >= 0; i--) {
    //if digits[i] is NOT 9, then add 1 and break out of loop
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      //otherwise, digit is 9 so + 1 would make it 10; make digit[i] === 0
      digits[i] = 0;

      //check if the current index is 0, if so, a 1 needs to be added to the front of the array (unshift(1))
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
  //return digits at the end
};
