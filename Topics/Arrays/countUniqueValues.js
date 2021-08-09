//DSA Udemy Course

//solution using pointers, i and j
//i = 0 and outside of loop; loop through j which starts at 1 for j < arr.length
//if arr[i] = arr[j], do nothing and keep looping through j
//if arr[i] !== arr[j], values are unique
    //increment i and then set the next arr[i] = the current arr[j] 
//return i (representing the current index of the last unique value) + 1
function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
        for (let j = 1; j < arr.length; j++){
            if (arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            } 
        }
    return i + 1;
}

//solution using Set
//create Set
//loop through array and add to Set (Sets only keep track of unique values)
//return size of Set
// function countUniqueValues(arr){
//     let uniqueVals = new Set;
//         for (let i = 0; i < arr.length; i++){
//             uniqueVals.add(arr[i]);
//         }
//     return uniqueVals.size;
// }

//sample input: countUniqueValues([1, 1, 1, 1, 1, 2])
//expected output: 2