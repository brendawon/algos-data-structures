function productSum(array, product = 1) {
  //product variable starting at 1 as input
  //running sum variable starting at 0
  let sum = 0;
  //loop through array
  for (let i = 0; i < array.length; i++) {
    //check if element is an array, if so, increment product and recursively call productSum on array
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], product + 1);
    } else {
      //otherwise, add to sum
      sum += array[i];
    }
  }
  return sum * product;
}
