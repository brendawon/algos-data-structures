//DSA Udemy Course
//Write a function which accepts a sorted array of integers and finds the first pair where the sum is 0. Return an array that includes both values or undefined if a pair does not exist.

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

//sample input: sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])
//expected output: [-3, 3]