//Given a string representing the Roman numerals, return the numeric value

var romanToInt = function (s) {
  //store key/value pairs with roman numerals
  let numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  //create total val
  let total = 0;
  //iterate through string
  for (let i = 0; i < s.length; i++) {
    //two pointers, singleRoman (i) and doubleRoman (i and i+1)
    let singleRoman = s[i];
    let doubleRoman = s[i] + s[i + 1];
    //compare doubleRoman to key/value pairs to check if possibly a 4x or 9x, add to total, i++ to skip the second i already counted in doubleRoman
    if (numerals[doubleRoman]) {
      total += numerals[doubleRoman];
      i++;
    } else {
      total += numerals[singleRoman];
    }
    //if not, compare singleRoman to key/value pairs and add to total, iterate normally
  }
  //return total
  return total;
};

//sample input: s = "MCMXCIV"
//expected output: 1994
