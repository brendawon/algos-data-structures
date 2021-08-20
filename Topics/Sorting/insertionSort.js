//DSA Udemy Course

//start with the second element in the array, store this as a variable current
//inner loop starts as the element before the current and will go down the left side of the array (so it is decremented) unless the value before it is < the current value (as we don't want to compare anymore if the items are smaller)
//compare the current with the one before it and swap if necessary
//repeat until it is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      arr[j] = current;
    }
  }
  return arr;
}
