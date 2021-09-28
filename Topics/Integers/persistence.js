function persistence(num) {
  //count var set to 0
  let count = 0;
  //turn num to string, if length is <2, return count
  let numStr = num.toString();

  //product var to store product
  let product = 1;

  //if >2, loop through string and multiple all values, store in product, check persistence
  while (numStr.length >= 2) {
    for (let i = 0; i < numStr.length; i++) {
      product *= numStr[i];
    }
    count++;
    numStr = product.toString();
    product = 1;
  }
  return count;
}
