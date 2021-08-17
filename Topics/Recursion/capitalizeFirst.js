//DSA Udemy Course
//given an array of strings, capitalize the first letter of each string

//create newArr
//base case: input arr length is 0, return newArr
//arr[0][0].toUpperCase(), push arr[0] in new array
//make new arr = spread new arr, spread capitalizeFirst(arr.slice(1))
//return new array


function capitalizeFirst (arr){
    let newArr = [];
    let firstLetter = "";
    let rest = "";
    if (arr.length === 0) return newArr;
    firstLetter = (arr[0][0].toUpperCase());
    rest = arr[0].slice(1);
    newArr.push(firstLetter+rest);
    newArr = [...newArr, ...capitalizeFirst(arr.slice(1))];
   return newArr;
}

//sample input: capitalizeFirst(['car','taco','banana']); 
//expected output: ['Car','Taco','Banana']
