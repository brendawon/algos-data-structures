function spinWords(str) {
  let arr = str.split(" ");
  let wordArr = [];
  let reverse = "";
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.length < 5) {
      wordArr.push(word);
    } else {
      for (let j = 0; j < word.length; j++) {
        reverse = word[j] + reverse;
      }
      wordArr.push(reverse);
      reverse = "";
    }
  }
  return wordArr.join(" ");
}
