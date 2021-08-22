//DSA Udemy Course

//create pivot helper function
//choose pivot element (typically and more simple to go with the first index)
//loop through every other element; if greater, don't do anything; if less, move the smaller number over and keep track of pivot index
//swap the pivot element with the element at the pivot index that has been incremented

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      let temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
}

//quicksort function
//base case is when the start and end point (passed into the pivot function) are =
//call pivot helper and call quicksort on the left side and then the right side of the pivot point
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left of the pivot point
    quickSort(arr, left, pivotIndex - 1);
    //right of the pivot point
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
