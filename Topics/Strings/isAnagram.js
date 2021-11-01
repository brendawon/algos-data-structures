var isAnagram = function (s, t) {
  //base: s and t must be the same length
  if (s.length !== t.length) return false;
  //objs to count frequency of characters in string
  let frequency = {};
  //loop through s to store counts
  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]]) {
      frequency[s[i]]++;
    } else {
      frequency[s[i]] = 1;
    }
  }
  //loop through t and decrement counts; return false if !obj[char]
  for (let i = 0; i < t.length; i++) {
    if (frequency[t[i]]) {
      frequency[t[i]]--;
    } else {
      return false;
    }
  }
  //return true outside of loop
  return true;
};
