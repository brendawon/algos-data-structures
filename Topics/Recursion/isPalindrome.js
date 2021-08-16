//DSA Udemy Course

//basecase: if length of str is 1 or less, return true
//compare str [0] and str[str.length-1]
//if true, resursive function str.slice(1, str.length-2)
//if false, return false
function isPalindrome(str){
    if (str.length === 1){
        return true;
    }
    if (str[0] === str[str.length-1]){
        return isPalindrome(str.slice(1, str.length-1))
    } else {
        return false;
    }
}

//sample input: isPalindrome('awesome')
//expected output: false