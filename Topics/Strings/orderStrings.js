function order(words) {
  //split the words into array=
  let wordArr = words.split(" ");
  let arr = [];
  //loop through to increment the number starting at 1
  for (let i = 1; i <= wordArr.length; i++) {
    //inner loop j to iterate through the array
    for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[j].indexOf(i) >= 0) {
        arr.push(wordArr[j]);
      }
    }
  }
  //join
  return arr.join(" ");
}
