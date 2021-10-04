function isIsogram(str) {
  let obj = {};
  //loop through string and change letters toLowerCase
  for (let i = 0; i < str.length; i++) {
    //add letter to obj if not in the obj; if it is in the obj, return false
    if (obj[str[i].toLowerCase()]) return false;
    obj[str[i].toLowerCase()] = str[i];
  }
  return true;
}
