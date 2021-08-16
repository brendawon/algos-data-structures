//DSA Udemy Course
//Given an array of arrays, return an array with all the values flattened

//new array
//loop through array
//check if arr[i] is array; if so, new array = spread new array, spread flatten(arr[i]), else, push into new array)
function flatten(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr = [...newArr, ...flatten(arr[i])];
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}

//sample input: flatten([1, 2, 3, [4, 5]])
//expected output: [1, 2, 3, 4, 5]