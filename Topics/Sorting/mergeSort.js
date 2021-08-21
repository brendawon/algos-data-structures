//DSA Udemy Course

//given two sorted arrays, merge and sort them
//create newArr
//create i and j to store indices of arr1 and arr1
//while there are still items in the arrays, iterate through and push in order
//look at smallest values of each input array and push the smaller one in the newArr

function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
}

//sorting part of mergeSort
//base case: if array length is 1 or 0 elements, return the array
//use slice to break arrays into halves recursively and use the merge function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, middle));
  let arr2 = mergeSort(arr.slice(middle));
  return merge(arr1, arr2);
}
