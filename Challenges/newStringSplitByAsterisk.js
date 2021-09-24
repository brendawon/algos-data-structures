//given a string that includes an asterisk which evenly splits the remaining parts of the string into equal pieces, return a new string that is composed of the two split strings one letter at a time

function asteriskStr(str) {
  let arr = str.split("*");
  let first = arr[0];
  let second = arr[1];
  let newStr = "";

  for (let i = 0; i < first.length; i++) {
    newStr += first[i] + second[i];
  }

  return newStr;
}

//sample input: "aaa*bbb"
//expected outcome: "ababab"
