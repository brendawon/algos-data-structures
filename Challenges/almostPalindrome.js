// write a function that takes in a string; return the number of characters that prevent the string from being a palindrome
// create var diffChars to keep count of different characters
// start pointer and end pointer
// loop through str while start < end; increment start and decrement end in loop
// if str[start] is not equal to str[end], add 2 to diffChar as there are 2 letters that do not match
// return the diffChars
function almostPalindrome(str) {
  let diffChars = 0;
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      diffChars += 2;
    }
    start++;
    end--;
  }
  return diffChars;
}

//sample input: str = "aabbbb"
//expected output: 4
