//Given an array of strings, return the longest common prefix; if there is no common prefix, return an empty string

var longestCommonPrefix = function (strs) {
  //create string var
  let prefix = "";
  //sort array in alphabetical order - should be able to just compare the first and last items to see how many letters match
  strs.sort();
  //create first word var arr[0] and last word var arr[strs.length-1]
  let first = strs[0];
  let last = strs[strs.length - 1];
  //looping through, add to the string var if short[i] === long[i]; when it does not match, break out of loop
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }
  //return a string
  return prefix;
};

//sample input: strs = ["flower", "flow", "flight"]
//expected output: "fl"

//sample input: strs = ["dog", "racecar", "car"]
//expected output: ""
