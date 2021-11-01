var firstUniqChar = function (s) {
  //create map to store letters and index
  let map = new Map();
  //loop through string and store letter = i if not already in map
  //if in map, set value = -1
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1);
    } else {
      map.set(s[i], i);
    }
  }
  //loop through values in map and return the first one that is > -1
  for (let value of map.values()) {
    if (value > -1) return value;
  }
  return -1;
};
