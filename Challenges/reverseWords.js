//given a string, write a function that returns the words in reverse order; should ignore multiple spaces

//let arr = split str with " "
//create word arr
//loop through arr starting from the end and going to 0; and if char is not a space, push into word array
//return word arr join " "
function reverseWords(str) {
  let arr = str.split(" ");
  let words = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (arr[i] !== " ") {
      words.push(arr[i]);
    }
  }
  return words.join(" ");
}

//sample input: "How are you today"
//expected outcome: "today you are How"

//sample input: "How    are   you   today"
//expected outcome: "today you are How"
