//DSA Udemy Course
//Given an array and a callback function, return true if a single value in the array returns true when passed to the callback

//base case: arr length is empty, return false
//cb on arr[0], return true if true, otherwise, return recursive function arr.slice(1)
function someRecursive(arr, cb){
    if (arr.length === 0){
        return false;
    }
    if (cb(arr[0]) === true){
        return true;
    } else {
        return someRecursive(arr.slice(1), cb);
    }
}

//const isOdd = val => val % 2 !== 0;
//sample input: someRecursive([1, 2, 3, 4], isOdd)
//expected output: true