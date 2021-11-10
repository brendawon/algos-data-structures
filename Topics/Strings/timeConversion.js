function timeConversion(s) {
  //check the second to last char in the string, if A, return substring from 0 through length of string - 2 since we don't want the AM/PM to be included
  if (s[s.length - 2] === "A") {
    //when it is AM and hours are 12, 12 needs to be 0
    if (s.substring(0, 2) === "12") {
      return "00" + s.substring(2, s.length - 2);
    } else {
      return s.substring(0, s.length - 2);
    }
  }
  //store the substring for PM times; only hour needs to be converted so separate out the first 2 chars for hours and save the end of the substring
  let pmTime = s.substring(0, s.length - 2);
  let hours = parseInt(pmTime.substring(0, 2));
  //if hours is 12, we want to return it as is, otherwise, we add 12
  if (hours !== 12) {
    hours += 12;
  }
  let remainingTime = pmTime.substring(2);
  //convert first 2 chars to number and add 12
  //return new string
  return hours + remainingTime;
}
