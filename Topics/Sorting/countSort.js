function countingSort(arr) {
  //create frequency array of 100 elements
  let freqArr = new Array(100).fill(0);
  //loop through arr
  for (let i = 0; i < arr.length; i++) {
    //for element values, go to that index in the frequency array and increment it
    freqArr[arr[i]]++;
  }
  //return frequency array
  return freqArr;
}
