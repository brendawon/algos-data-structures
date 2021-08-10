//DSA Udemy Course
//Write a function which takes in two strings and checks whether the characters in the first form a subsequence of the characters in the second string without changing order.
//**got confused that this was checking for a perfect match; the first string letters just have to be contained in the second string without changing the order */

//check that str2.length is >= str1.length; if not, return false
//create matchPointer to keep track of when there is a match
//iterate through str2
//when match is found, check if pointer has gone through the entire str1; if so, return true, otherwise increment match pointer to iterate through the rest of str1 to ensure there is a full match with str2
function isSubsequence(str1, str2) {
    if (str2.length >= str1.length){
        let matchPointer = 0;
        for(let i = 0; i < str2.length; i++){
            if (str2[i] === str1[matchPointer]){
                matchPointer++;
                if (matchPointer === str1.length){
                    return true;
                }
            }
        }
    } 
    return false;
}

//sample input: isSubsequence('hello', 'hello world')
//output: true