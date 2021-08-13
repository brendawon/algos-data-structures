//DSA Udemy Course
//given an array of numbers, return the products of all of them

//base case: length of arr is 0; return 1
//take arr[0] and multiply by productOfArray(arr.slice(1))
function productOfArray(arr){
    if (arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

//sample input: productOfArray([1, 2, 3])
//expected output: 6