function balanceArr(arr) {
  //cannot sort array
  //left sum and right sum variables
  let leftSum = arr[0];
  let rightSum = arr[arr.length - 1];
  //left and right pointers
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  //while loop until right pointer is 2 more than left pointer (so pivot must be in the middle)
  while (rightIndex - leftIndex > 2) {
    //if L > R, move the right pointer along and add to right sum
    if (leftSum > rightSum) {
      rightIndex--;
      rightSum += arr[rightIndex];
    } else if (rightSum > leftSum) {
      //if R > L, move the left pointer along and add to left sum
      leftIndex++;
      leftSum += arr[leftIndex];
    } else {
      //if L = R, move both pointers and add to both sums
      rightIndex--;
      leftIndex++;
      leftSum += arr[leftIndex];
      rightSum += arr[rightIndex];
    }
  }
  //return left pointer + 1 as the pivot index
  return leftIndex + 1;
}
