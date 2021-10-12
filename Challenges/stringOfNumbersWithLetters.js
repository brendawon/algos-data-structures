//given a string of letters, return a string that represents the number of times the letter appears + the letter
//sample input: 'wwwbbbwd'
//expected output: '3w3b1w1d'

function numbersWithLetters(s) {
  //empty string
  let str = "";
  //count to keep track of number of times letter repeats = initialize at 1
  let count = 1;
  //last letter var to store previous letter, start at index 0
  let previousLetter = 0;

  //loop through string starting at index 1
  for (let i = 1; i < s.length; i++) {
    //if current letter = previous letter, count++
    if (s[i] === s[previousLetter]) {
      count++;
    } else {
      //if not equal, empty string + count + previous letter
      str += count + s[previousLetter];
      //reset count to 1
      count = 1;
    }
    //want to make sure the letter and count are added for the last letter
    if (i === s.length - 1) {
      str += count + s[i];
    }
    //previous letter = current letter
    previousLetter = i;
  }
  return str;
}
