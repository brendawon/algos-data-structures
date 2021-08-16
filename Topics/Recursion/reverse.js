//DSA Udemy Course
//Reverse the string

//base case: if str.length is <= 1, return newStr
//add str[0] to newStr
//recursive function with str.slice(1)
function reverse(str){
    if (str.length === 0){
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}

//sample input: reverse('awesome') 
//expected output: 'emosewa'