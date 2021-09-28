function duplicateCount(text) {
  //create obj var to store seen letters
  let seen = {};
  //create obj to store repeats
  let repeated = {};

  for (let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    //loop through string (toLowerCase()) and add to obj if not there
    if (!seen[letter]) {
      seen[letter] = true;
    } else {
      //if there, add to repeat obj
      repeated[letter] = true;
    }
  }
  //return size of repeat obj
  return Object.keys(repeated).length;
}
