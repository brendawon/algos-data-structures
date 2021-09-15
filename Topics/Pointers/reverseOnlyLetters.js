//Leetcoode
//Given a string s, reverse the string so that 1. All the characters that are not letters remain in the same position and 2. all the letters (lower and uppercase) should be reversed

//create two pointers, start and end to iterate through the string
//loop through while start < end
//checking if letter using regEx /[a-zA-Z]/
//use s.match(regEx)
//split s into an array as strings are immutable
//if arr[start] is a letter and arr[end] is a letter, swap the two values
//swap: temp = arr[start], arr[start] = arr[end], arr[end] = temp
//if arr[start] is not a letter, increment start
//if arr[end] is not a letter, decrement end
var reverseOnlyLetters = function (s) {
  let start = 0;
  let end = s.length - 1;
  let isLetter = /[a-zA-Z]/;
  let arr = s.split("");
  while (start < end) {
    if (arr[start].match(isLetter) && arr[end].match(isLetter)) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    } else if (!arr[start].match(isLetter)) {
      start++;
    } else if (!arr[end].match(isLetter)) {
      end--;
    }
  }
  return arr.join("");
};

//sample input: s = "ab-cd"
//expected output: "dc-ba"
