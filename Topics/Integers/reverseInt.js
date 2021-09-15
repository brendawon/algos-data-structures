//

var reverse = function (x) {
  //turns x into a string, splits string into array, reverses array, joins array back to string, turns string back to integer
  let rev = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  if (rev > Math.pow(2, 31) - 1) return 0;
  return x < 0 ? rev * -1 : rev;
};

//sample input: 1234567899
//expected output: 0

//sample input: -321
//expected output: -123
