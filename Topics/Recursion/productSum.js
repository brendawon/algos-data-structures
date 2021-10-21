function productSum(array, multiplier = 1) {
  let sum = 0;
  //have running sum
  //loop through every item and check if it's an array, if not, add them
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let result = productSum(array[i], multiplier + 1);
      sum += result;
    } else {
      //if it's an array, increment a multiplier and then do a recursive call, pass mutliplier in as an argument to productSum
      sum += array[i];
    }
  }
  return sum * multiplier;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
//5+2+2*(7+-1)+3+2*(6 + 3(-13+8) + 4)
//output: 12

//[x, [y,z]] => x+2*(y+z)
