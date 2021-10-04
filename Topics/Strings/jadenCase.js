String.prototype.toJadenCase = function () {
  //String = this
  //split into array with " "
  let words = this.split(" ");
  //create empty str to return
  let str = "";

  //loop through words array, words[i][0].toUpperCase() + words[i].substr(1)
  for (let i = 0; i < words.length; i++) {
    str += words[i][0].toUpperCase() + words[i].substr(1);
    if (i !== words.length - 1) {
      str += " ";
    }
  }
  return str;
};
