function reverseArray(arr) {
  //reverse in place so do swaps while looping
  //start and end pointers; while loop until start > end, swap elements, increment start pointer and decrement end pointer
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    //easy swapping
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
