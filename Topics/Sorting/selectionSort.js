//DSA Udemy Course

//store the first element as the smallest value
//loop through the array and compare, store the smaller of the values
//swap the minimum with the first index
//continue with the next item in the array and compare until everything is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}
