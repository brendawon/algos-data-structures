//DSA Udemy Course
//Write a function which accepts an array of integers and a number n. The function should calculate the maxium sum of n consecutive elements in the array.

//store max value
//store temp value
//loop through array 
//set max value = first set of nums' in array sum
//temp sum = max sum
//loop through array starting at i = num (as the current temp value is equal to the sum of the beginning of the array)
//temp sum = temp sum minus the first value from the previous set of sums (index = i-num) plus the current index i
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        if (tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum;
}

//sample input: maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
//expected output: 19