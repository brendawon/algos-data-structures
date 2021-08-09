//DSA Udemy Course
//Given two strings, write a function to determine if the second string is an anagram of the first.

//if strs are not equal length, return false
//create obj to store frequencies
//if obj contains str1[i] as key, increment it, otherwise, set to 1
//if obj contains str2[i] as a key, decrement it, otherwise, set to -1
//determine if object.values(obj) contains any number < 0; if so, return false; otherwise true
function validAnagram(str1, str2){
    if (str1.length === str2.length) {
        let obj = {}
        for (let i = 0; i < str1.length; i++){
            if(obj[str1[i]]){
                obj[str1[i]]++
            } else {
                obj[str1[i]] = 1;
            }
            if (obj[str2[i]]){
                obj[str2[i]]--;
            } else {
                obj[str2[i]] = -1
            }
        }
        if (Object.values(obj).some(item => item < 0) === false) return true;
    }
    return false;
}

// function validAnagram(str1, str2){
//     if (str1.length === str2.length) {
    //     let obj = {}
    //     for (let i = 0; i < str1.length; i++){
    //         if(obj[str1[i]]){
    //             obj[str1[i]]++
    //         } else {
    //             obj[str1[i]] = 1;
    //         }
    //     }
    //     for (let i = 0; i < str2.length; i++){
    //         // ZERO is FALSEY so when an obj value is 0, it will return false
    //         if (!obj[str2[i]]){
    //             return false;
    //         } else {
    //             obj[str2[i]] -= 1
    //         }
    //     }
    //     return true;
    // }
    // return false;
// }

//sample input: validAnagram('anagrams', nagaram')

//expected output: false