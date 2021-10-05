function generateHashtag(str) {
  if (str.length === 0) return false;
  //create hashtag str
  let hashtag = "";
  //split the string into words with space " "
  let words = str.split(" ");
  //loop through words
  for (let i = 0; i < words.length; i++) {
    //if word is an empty string or a space, do nothing
    if (words[i] !== "" && words[i] !== " ") {
      //capitalize each first letter of the word, add word to string
      hashtag += words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  //check str.length is <= 139 and it is not empty, add hashtag to beginning and return str; otherwise, return false
  if (hashtag.length <= 139 && hashtag.length !== 0) {
    return "#" + hashtag;
  }
  return false;
}
