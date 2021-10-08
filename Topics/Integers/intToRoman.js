var intToRoman = function (num) {
  //create obj for number/roman pairs
  const dictionary = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let roman = "";
  while (num > 0) {
    let largest = 0;
    for (let value in dictionary) {
      //loop through obj to find which is the largest key the number is > than
      if (value <= num) {
        largest = Math.max(largest, value);
      }
    }
    //subtract the key from the number and add the obj value to a string
    num -= largest;
    roman += dictionary[largest];
  }
  //return the string
  return roman;
};
