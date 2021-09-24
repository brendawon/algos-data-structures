function digital_root(n) {
  //turn n into a string, check length
  let str = n.toString();

  //sum variable
  let sum = 0;

  //base case when str length = 1, return n
  if (str.length === 1) return n;

  //otherwise

  //loop through the string, turning str[i] back into integer
  for (let i = 0; i < str.length; i++) {
    //add everything together
    sum += parseInt(str[i]);
  }

  //recursive function with sum as the input
  return digital_root(sum);
}
