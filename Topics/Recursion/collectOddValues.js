//DSA Udemy Course

//iterative approach is very simple
// function collectOddValues(arr){
//     let results = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0){
//             results.push(arr[i]);
//         }
//     }
//     return results;
// }

//but if we HAVE to solve it recursively, we can use either helper method recusion
// function collectOddValues(arr){
//     let result = [];
//     function helper(helperInput){
//         if (helperInput.length === 0){
//             return;
//         }
//         if (helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }

//or we can use pure recursion
function collectOddValues(arr){
    let newArr = [];
    if (arr.length === 0){
        return newArr;
    }
    if (arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    //newArr is empty every time function is called but concat will combine the array
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}