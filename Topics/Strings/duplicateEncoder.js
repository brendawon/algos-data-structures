function duplicateEncode(word) {
  //store letters in obj and increment count
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i].toLowerCase()]) {
      obj[word[i].toLowerCase()]++;
    } else {
      obj[word[i].toLowerCase()] = 1;
    }
  }
  //create empty string var
  let str = "";
  //loop string again and if obj[letter] > 1, add ) to string, otherwise add (
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i].toLowerCase()] > 1) {
      str += ")";
    } else {
      str += "(";
    }
  }
  return str;
}
