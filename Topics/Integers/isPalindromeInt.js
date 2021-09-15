var isPalindrome = function (x) {
  //turn x into string
  let str = x.toString();

  //create start and end pointers
  let start = 0;
  let end = str.length - 1;

  //while loop start <= end
  while (start <= end) {
    //loop through string; if string[start] !== string[end] return false
    if (str[start] !== str[end]) {
      return false;
    }

    //otherwise, start++ and end--
    start++;
    end--;
  }
  //outside of loop, return true
  return true;
};

//sample input: -121
//expected output: false

//sample input: 131
//expected output: true
