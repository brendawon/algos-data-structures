var strStr = function (haystack, needle) {
  //create vars for matchingChars & indices
  let matchingChars = 0;
  let hI = 0;
  // edge case: if needle.length is < 1, return 0
  if (needle.length < 1) return 0;

  // if needle.length <= haystack
  if (needle.length <= haystack.length) {
    //while loop through haystack to find a match with needle
    while (matchingChars < needle.length || hI < haystack.length) {
      //when there is a match, increment match
      if (needle[matchingChars] === haystack[hI]) {
        matchingChars++;
      } else {
        if (matchingChars > 0) {
          //when not a match, reset h1 to point of first match (hI - matchingChars)
          hI = hI - matchingChars;
          matchingChars = 0;
        }
      }
      hI++;
    }
  }
  if (matchingChars === needle.length) {
    return hI - needle.length;
  } else {
    return -1;
  }
};
