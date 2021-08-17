//DSA Udemy Course

//create new arr
//base case: arr.length is 0, return newArr
//newArr.push(arr[0].toUpperCase())
//new arr = spread new arr, spread capitalizeWords(arr.slice(1))
function capitalizeWords (arr) {
    let newArr = [];
    if (arr.length > 0){
    newArr.push(arr[0].toUpperCase());
    newArr = [...newArr, ...capitalizeWords(arr.slice(1))];
    }
    return newArr;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']