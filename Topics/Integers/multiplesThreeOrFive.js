function solution(number) {
  //var to store sum
  let sum = 0;

  //start number at number--
  number--;

  //while loop while number >= 3
  while (number >= 3) {
    //check if number % 15 = 0, if so, add to sum
    if (number % 15 === 0) {
      sum += number;
    } else if (number % 5 === 0) {
      sum += number;
    } else if (number % 3 === 0) {
      sum += number;
    }

    //decrement number
    number--;
  }
  return sum;
}
