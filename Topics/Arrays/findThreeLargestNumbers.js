function findThreeLargestNumbers(array) {
  let temp1 = array[0];
  let temp2 = array[1];
  let temp3 = array[2];

  if (temp1 > temp2) {
    [temp1, temp2] = [temp2, temp1];
  }
  if (temp2 > temp3) {
    [temp2, temp3] = [temp3, temp2];
  }

  for (let i = 3; i < array.length; i++) {
    if (array[i] > temp1) {
      temp1 = array[i];
    }
    if (temp1 > temp2) {
      [temp1, temp2] = [temp2, temp1];
    }
    if (temp2 > temp3) {
      [temp2, temp3] = [temp3, temp2];
    }
  }
  return [temp1, temp2, temp3];
}
