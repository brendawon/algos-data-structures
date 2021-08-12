//DSA Udemy Course
//Given a string, return the length of the longest substring with all distinct characters

//create variable for longestSubstring
//create obj for seen letters
//create window start = 0
//loop through length of string
//if obj[str[i]], this is a duplicate and start should be reset to the index of the previous seen character + 1
//check if longestSubstring is < (current index - start + 1); if so, set it equal to that
//set seen[i] = index it is at + 1 
//return longestSubstring

function findLongestSubstring(str){
    let longestSubstring = 0;
    let seen = {};
    let start = 0;
    for (let i = 0; i < str.length; i++) {
      if (seen[str[i]]) {
        if (seen[str[i]] > start){
            start = seen[str[i]];
        }
      }
      let length = i - start + 1;
      if (longestSubstring < length){
          longestSubstring = length;
      }
      seen[str[i]] = i +1;
    }
    return longestSubstring;
}

//sample input: findLongestSubstring('thisisawesome')
//expected output: 6