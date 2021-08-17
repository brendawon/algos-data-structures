//DSA Udemy Course 
//return the sum of all even numbers in an object which may contain nested objects
//loop through each key in object
//if obj[key] type is an object, sum += recursive function 
//if obj[key] type is a number && number is divisble by 2 (even), sum += obj[key]
//return sum
function nestedEvenSum (obj, sum = 0) {
    for (var key in obj){
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key])
        }
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

//sample input: nestedEvenSum(obj1); 
//expected output: 6
//sample input: nestedEvenSum(obj2); 
//expected output: 10