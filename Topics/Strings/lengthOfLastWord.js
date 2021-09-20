var lengthOfLastWord = function (s) {
  //split the string with " "
  let arr = s.split(" ");
  //the resulting array may contain spaces if there were multiple spaces in a row in the string
  //loop through array starting from the end
  for (let i = arr.length - 1; i >= 0; i--) {
    //if arr[i] !== a space, create var lastWord = array[i]
    if (arr[i] !== "") {
      let lastWord = arr[i];

      //return the length of lastWord
      return lastWord.length;
    }
  }
};
