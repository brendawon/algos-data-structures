function getMiddle(s) {
  let middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) return s[middleIndex];
  return s[middleIndex - 1] + s[middleIndex];
  //if length is odd, return letter at index s.length/2
  //if length is even, return letters at index s.length/2 + s.length/2 -1
}
