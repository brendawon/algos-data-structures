//Given a string containing just the characters (){}[], determine if the bracketes are closed properly in the correct order

var isValid = function (s) {
  //if s.length is odd, return false
  if (s.length % 2 !== 0) return false;

  //create array to store open brackets
  let openB = [];

  //create obj w/ key:value pairs of open brackets: close brackets
  let bracketPairs = { "[": "]", "{": "}", "(": ")" };

  //loop through the string
  for (let i = 0; i < s.length; i++) {
    //check if open, push into open array
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      openB.push(s[i]);
    } else {
      //if closed, create var to store the popped value of the array from the end of the array, ensuring that the last open bracket will be compared to the closing bracket
      let poppedBracket = openB.pop();

      //check if obj[poppedBracket] === closing bracket; if not, return false, otherwise keep iterating through
      if (bracketPairs[poppedBracket] !== s[i]) return false;
    }
  }

  //outside of loop, if array is empty, return true; otherwise return false
  if (openB.length === 0) return true;
  return false;
};

//sample input: s = "([)]"
//expected output: false

//sample input: s = "()[]{}"
//expected output: true
