var strStr = function (haystack, needle) {
  //create vars for matchingChars & indices
  let matchingChars = 0;
  let hI = 0;
  // edge case: if needle.length is < 1, return 0
  if (needle.length < 1) return 0;

  //while loop through haystack to find a match with needle
  while (matchingChars < needle.length && hI < haystack.length) {
    //when there is a match, increment match
    if (needle[matchingChars] === haystack[hI]) {
      matchingChars++;
    } else {
      if (matchingChars > 0) {
        //when not a match, reset h1 to point of first match (hI - matchingChars) and set match to 0
        hI = hI - matchingChars;
        matchingChars = 0;
      }
    }
    //increment h index to move along the haystack
    hI++;
  }

  //after loop, check if matching characters = needle length, if it does, subtract the needle from the recorded h index
  if (matchingChars === needle.length) {
    return hI - needle.length;
  } else {
    //if not equal, return -1
    return -1;
  }
};
