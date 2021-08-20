//DSA Udemy Course

//loop through array with i which starts at the length of the array - this is so we only compare the index of j that needs to be compared, and we don't compare already sorted items that are bubbled up at the end of the array
//inner loop j beginning at 0 through i-1
//if arr[j] > arr[j+1], swap the two

function bubbleSort(arr) {
  //optimize for ALMOST sorted array: add noSwaps variable to reduce times we loop if we don't need to make any swaps
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
