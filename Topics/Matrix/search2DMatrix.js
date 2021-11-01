var searchMatrix = function (matrix, target) {
  //some kind of binary search;
  //could flatten matrix and do a regular binary search starting from middle
  let flattened = matrix.flat();
  //start, end, and middle pointers
  let start = 0;
  let end = flattened.length - 1;
  let middle = Math.ceil((start + end) / 2);
  //loop while start < end
  while (start <= end) {
    //check if middle = target then return true;
    if (flattened[middle] === target) return true;
    //if not, if target < middle, end = middle -1, middle = average of start + end
    if (target < flattened[middle]) {
      end = middle - 1;
    }
    //if target > middle, start = middle + 1, middle = average
    if (target > flattened[middle]) {
      start = middle + 1;
    }
    middle = Math.ceil((start + end) / 2);
  }
  //return false outside of loop since no match was found
  return false;
};
