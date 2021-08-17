//DSA Udemy Course
//return an array of the values in an object that are strings

//create array variable
//loop through keys in obj
//check typeof obj[key] - if equal to an obj or array, arr = spread arr, spread recursive function that obj[key]
//else if typeof obj[key] is a string, push into array
//return array
function collectStrings(obj){
    let arr = [];
    for (var key in obj){
        if (typeof obj[key] === 'object' || Array.isArray(obj[key])){
            arr = [...arr, ...collectStrings(obj[key])];
        } else if (typeof obj[key] === 'string'){
            arr.push(obj[key]);
        }
    }
    return arr;
}
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])